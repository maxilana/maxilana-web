import Image from 'next/image';
import { NextPage } from "next";
import { WhatsAppOutlined } from '@ant-design/icons';

import { Hero } from "~/components/common";
import { ButtonDropdown } from '~/components/ui';
import { Layout, Navbar } from "~/components/layout";

const whatsappList = [
  { label: "Culiacán y Navolato" },
  { label: "Mazatlán" },
  { label: "Guadalajara" },
  { label: "Hermosillo" },
  { label: "Mexicali" },
  { label: "Tijuana" }
];

const ValesPage: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Hero
        title="Invierte tu tiempo y gana dinero extra"
        subtitle="Conviértete en distribuidora de vales y empieza a cumplir tus metas"
        cover={(
          <Image
            layout="fill"
            src="/demo-hero-vales.jpg"
            alt="Mujer hablando por teléfono, consiguiendo clientes"
            objectFit="cover"
          />
        )}
        actions={(
          <ButtonDropdown
            theme="danger"
            text="Conviértete en distribuidora"
            icon={<WhatsAppOutlined style={{ fontSize: 20 }} />}
            listItems={whatsappList.map(item => (
              <span key={item.label} className="block p-2 text-xs text-primary">
                {item.label}
              </span>
            ))}
          />
        )}
      />
      <Layout>
        <h1>Hey!</h1>
      </Layout>
    </div>
  )
}

export default ValesPage;
