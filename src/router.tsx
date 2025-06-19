import { createBrowserHistory } from "history";
import { normalize } from "./functions";
import { gstate } from "./global";
import { modules } from "./modules";
import { changeLang } from "./locale";

export const history = createBrowserHistory();

type Params = Record<string, string | number> | null;

// 支持的语言列表（直接定义避免循环依赖）
const supportedLangs = ["en-US", "tr-TR", "fr-FR", "es-ES", "ko-KR", "ja-JP", "zh-TW", "zh-CN", "fa-IR"];
const defaultLang = "en-US";

// 从路径中提取语言和页面路径
function extractLangAndPath(pathname: string): { lang: string, path: string } {
  const segments = pathname.split('/').filter(Boolean);
  
  if (segments.length > 0 && supportedLangs.includes(segments[0])) {
    // 如果第一个段是支持的语言
    const lang = segments[0];
    const path = segments.slice(1).join('/') || 'home';
    return { lang, path };
  }
  
  // 没有语言前缀，使用默认语言
  return { lang: defaultLang, path: segments.join('/') || 'home' };
}

// 切换语言并更新URL
export async function switchLanguage(newLang: string) {
  const currentPath = history.location.pathname;
  const { path } = extractLangAndPath(currentPath);
  
  let newPath: string;
  
  // 如果切换到默认语言(英文)，跳转到根路径
  if (newLang === defaultLang) {
    newPath = path === 'home' ? '/' : `/${path}`;
  } else {
    newPath = `/${newLang}/${path === 'home' ? '' : path}`;
  }
  
  // 先更新语言设置，再导航
  await changeLang(newLang);
  navigate(newPath, 'push');
}

export function goto(
  pathname: string = "/",
  params?: Params,
  type: string = "push",
) {
  // 如果是根路径，直接使用不添加语言前缀
  if (pathname === "/") {
    pathname += buildQueryString(params);
    navigate(pathname, type);
    return;
  }
  
  // 如果路径不包含语言前缀，添加当前语言
  if (!supportedLangs.some(lang => pathname.startsWith(`/${lang}/`))) {
    const currentLang = gstate.lang || defaultLang;
    pathname = `/${currentLang}${pathname.startsWith('/') ? pathname : '/' + pathname}`;
  }
  
  pathname += buildQueryString(params);
  navigate(pathname, type);
}

function buildQueryString(params?: Params) {
  if (!params) return "";
  const search = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    search.append(key, String(value));
  });

  const query = search.toString();
  return query ? `?${query}` : "";
}

function navigate(pathname: string, type: string): void {
  if (type === "push") {
    history.push(pathname);
  } else if (type === "replace") {
    history.replace(pathname);
  } else {
    throw new Error("Error history route method");
  }
}

export function initRouter() {
  history.listen(({ location }) => {
    handleRouteChange(location.pathname);
  });
  handleRouteChange(history.location.pathname);
}

async function handleRouteChange(pathname: string) {
  const { lang, path } = extractLangAndPath(pathname);
  
  // 如果是根路径，使用默认语言但不重定向
  if (pathname === '/') {
    if (gstate.lang !== defaultLang) {
      await changeLang(defaultLang);
    }
    gstate.pathname = "home";
    gstate.page = await loadPageComponent("home");
    return;
  }
  
  // 检查是否需要重定向（非根路径但没有语言前缀的路径）
  const hasLanguagePrefix = supportedLangs.some(l => 
    pathname.startsWith(`/${l}/`) || pathname === `/${l}`
  );
  
  if (!hasLanguagePrefix && pathname !== '/') {
    const userLang = gstate.lang || defaultLang;
    const redirectPath = `/${userLang}/${path}`;
    navigate(redirectPath, 'replace');
    return;
  }
  
  // 更新语言设置
  if (gstate.lang !== lang) {
    await changeLang(lang);
  }
  
  gstate.pathname = normalize(path) || "home";
  gstate.page = await loadPageComponent(gstate.pathname);
}

async function loadPageComponent(pathname: string) {
  try {
    const importer = modules[`/src/pages/${pathname}/index.tsx`]();
    const result = await importer;
    return <result.default />;
  } catch (error) {
    const error404 = await import(`@/pages/error404/index.tsx`);
    return <error404.default />;
  }
}
