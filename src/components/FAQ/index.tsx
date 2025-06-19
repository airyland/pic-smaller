import { Collapse, Typography } from "antd";
import { observer } from "mobx-react-lite";
import { gstate } from "@/global";
import style from "./index.module.scss";

const { Title } = Typography;

export const FAQ = observer(() => {
  const { faq } = gstate.locale || {};

  if (!faq) {
    return null;
  }

  return (
    <div className={style.faq}>
      <Title level={1} className={style.title}>
        {faq.title}
      </Title>

      {faq.sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className={style.section}>
          <div className={style.sectionTitle}>
            {section.title}
          </div>
          
          <div className={style.faqList}>
            <Collapse
              items={section.items.map((item, itemIndex) => ({
                key: `${sectionIndex}-${itemIndex}`,
                label: (
                  <div className={style.question}>
                    {item.question}
                  </div>
                ),
                children: (
                  <div className={style.answer}>
                    {item.answer}
                  </div>
                ),
              }))}
              size="large"
              expandIconPosition="end"
              ghost
            />
          </div>
        </div>
      ))}
    </div>
  );
});