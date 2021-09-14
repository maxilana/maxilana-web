import { NextPage } from 'next';
import { Layout } from '~/components/layout';
import { SideMenu } from '~/components/common';
import legalLinks from 'modules/mock/legal.json';
import { PropsWithCities } from '~/types/PropsWithCities';

export { default as getStaticProps } from '~/utils/defaultGetStaticProps';

const PrivacyPage: NextPage<PropsWithCities> = ({ cities }) => {
  return (
    <Layout cities={cities} title="Aviso de Privacidad">
      <main className="container mx-auto px-4 py-12 grid gap-16 lg:grid-cols-3">
        <div className="hidden lg:block">
          <SideMenu
            links={
              legalLinks.map((item) => ({
                label: `${item?.label}`,
                href: item.href,
              })) || []
            }
          />
        </div>
        <div className="lg:col-span-2">
          <h1 className="h4 mb-8">Aviso de privacidad para datos personales</h1>
          <div>
            <p>
              Con fundamento en los art&iacute;culos 15 y 16 de la Ley Federal de Protecci&oacute;n
              de Datos Personales en Posesi&oacute;n de Particulares hacemos de su conocimiento que
              LA NACIONAL PIGNORACIONES Y REMATES, SOCIEDAD AN&Oacute;NIMA DE CAPITAL VARIABLE, con
              domicilio en DONATO GUERRA 235 SUR, INT. 201, COL. JORGE ALMADA, CULIAC&Aacute;N,
              SINALOA, C&Oacute;DIGO POSTAL 80200, es responsable de recabar sus datos personales,
              del uso que se le d&eacute; a los mismos y de su protecci&oacute;n, por lo que al
              utilizar los servicios de la empresa, Usted acepta las pr&aacute;cticas de
              recopilaci&oacute;n y uso de informaci&oacute;n descrita en este aviso de privacidad.
              LA NACIONAL PIGNORACIONES Y REMATES, S.A. DE C.V. utiliza la informaci&oacute;n
              suministrada durante el proceso de empe&ntilde;o, recibiendo y registrando la
              informaci&oacute;n de los datos personales para los siguientes prop&oacute;sitos
              generales: adecuar el servicio que el Usuario realiza en ventanillas, satisfacer y
              mejorar sus necesidades de productos y servicios, ponerlo en contacto y proveer
              reportes an&oacute;nimos para clientes internos y externos, proveer los servicios y
              productos que ha solicitado; notificarle sobre nuevos servicios o productos que tengan
              relaci&oacute;n con los ya contratados o adquiridos; comunicarle sobre cambios en los
              mismos; elaborar estudios y programas que son necesarios para determinar
              h&aacute;bitos de consumo; realizar evaluaciones peri&oacute;dicas de nuestros
              productos y servicios a efecto de mejorar la calidad de los mismos; evaluar la calidad
              del servicio que brindamos, y en general, para dar cumplimiento a las obligaciones que
              hemos contra&iacute;do con Usted. El objetivo m&aacute;s importante de LA NACIONAL
              PIGNORACIONES Y REMATES, S.A. DE C.V. al recoger sus datos personales, es entender y
              proporcionar al usuario una experiencia m&aacute;s satisfactoria al visitar nuestras
              sucursales y adquirir nuestros servicios, ya que al conocer m&aacute;s a nuestros
              clientes podemos proporcionarles productos acordes a sus necesidades. Al recabar los
              datos del usuario, podemos elaborar estad&iacute;sticas internas que nos indiquen
              cu&aacute;les son los servicios y productos m&aacute;s apreciados por diferentes
              segmentos de usuarios, igualmente nos sirve para dar la formalidad debida al proceso
              transaccional, adem&aacute;s de solicitar informaci&oacute;n durante los procesos de
              registro antes mencionados, le podremos solicitar informaci&oacute;n personal en otras
              ocasiones como, por ejemplo, al participar en un concurso o en cualquier
              promoci&oacute;n, y para notificarnos sobre un problema con nuestro servicio. Para las
              finalidades antes mencionadas, requerimos obtener los siguientes datos personales:
              Nombre completo; Nombre de un tercero de confianza (cotitular); Nombre de un
              beneficiario; N&uacute;mero de Tel&eacute;fono local y/o celular; Domicilio particular
              y/o de trabajo; RFC y/o CURP; Firma aut&oacute;grafa; Huellas dactilares; LA NACIONAL
              PIGNORACIONES Y REMATES, S.A. DE C.V. no vende ni alquila la informaci&oacute;n de los
              usuarios, mas puede decidir compartir la informaci&oacute;n personal del Usuario con
              compa&ntilde;&iacute;as o asociaciones que trabajen a nombre de o con LA NACIONAL
              PIGNORACIONES Y REMATES, S.A. DE C.V., estas mismas pueden utilizar esta
              informaci&oacute;n personal para apoyar a LA NACIONAL PIGNORACIONES Y REMATES, S.A. DE
              C.V. a comunicarse con los Usuarios acerca de situaciones diversas o para informarle
              acerca de productos y servicios, Cuando el Usuario solicita nuestros servicios,
              proporcionamos su informaci&oacute;n personal a nuestros colaboradores, los cuales
              creemos pueden proporcionar un producto o servicio de calidad. Toda acci&oacute;n de
              un Usuario de cualquier producto, servicio o informaci&oacute;n constituye una
              autorizaci&oacute;n expresa para que LA NACIONAL PIGNORACIONES Y REMATES, S.A. DE C.V.
              proporcione su informaci&oacute;n personal a cualquier colaborador seleccionado a
              nuestra discreci&oacute;n y al solo efecto de satisfacer la solicitud en forma
              satisfactoria. Por ejemplo, si un Usuario contrae responsabilidades con LA NACIONAL
              PIGNORACIONES Y REMATES, S.A. DE C.V., su informaci&oacute;n personal ser&aacute;
              distribuida con nuestros colaboradores para dar respuesta a dicha consulta o
              env&iacute;o de informaci&oacute;n seg&uacute;n corresponda. Es as&iacute; que
              nuestros colaboradores en el cumplimiento de su mandato pueden utilizar la
              informaci&oacute;n personal del Usuario para procesar su orden, responder a sus
              peticiones de informaci&oacute;n o proporcionar la informaci&oacute;n adicional sobre
              productos y servicios que creen mejor resolver&aacute; las necesidades del Usuario. Si
              bien a todos nuestros colaboradores les requerimos un apego total a nuestros
              est&aacute;ndares de privacidad, es muy importante que el Usuario se interiorice de
              las pol&iacute;ticas de privacidad de estos, ya que nuestros colaboradores pueden
              guardar y utilizar la informaci&oacute;n del Usuario si este adquiere o no sus
              productos o utiliza o no sus servicios. LA NACIONAL PIGNORACIONES Y REMATES, S.A. DE
              C.V. puede divulgar la informaci&oacute;n personal del Usuario en respuesta a
              citaciones u &oacute;rdenes judiciales, o a procesos legales, o para establecer o
              ejercitar nuestros derechos legales o defenderlos contra demandas legales. Creemos que
              es necesario compartir la informaci&oacute;n para investigar, prevenir, o tomar
              acciones con respecto a las actividades ilegales, o seg&uacute;n lo requerido de otra
              manera por la ley. Nuestros servicios s&oacute;lo est&aacute;n disponibles para
              aquellas personas que tengan capacidad legal para contratar. Por lo tanto, aquellos
              que no cumplan con esta condici&oacute;n deber&aacute;n abstenerse de suministrar
              informaci&oacute;n personal para ser incluida en nuestras bases de datos. Sin embargo,
              pueden hacerlo a trav&eacute;s de los padres o tutores. Es importante informarle que
              usted tiene derecho al Acceso, Rectificaci&oacute;n, Cancelaci&oacute;n y
              Oposici&oacute;n de sus datos personales, a limitar el uso o divulgaci&oacute;n de los
              mismos y/o a revocar el consentimiento que para dicho fin nos haya otorgado. Cabe
              mencionar que el ejercicio de los derechos ARCO es gratuito y el titular
              &uacute;nicamente deber&aacute; cubrir el costo por reproducci&oacute;n en copias u
              otros formatos. Una vez presentada la solicitud, en los t&eacute;rminos que marca la
              Ley en su Art. 29, LA NACIONAL PIGNORACIONES Y REMATES, S.A. DE C.V. cuenta con un
              plazo m&aacute;ximo de 20 d&iacute;as h&aacute;biles para responder, y 15 d&iacute;as
              h&aacute;biles m&aacute;s para hacer efectivo el ejercicio de derecho que se solicite,
              en el supuesto de que resulte procedente. En caso de que volviera a ejercer cualquiera
              de los derechos en un plazo menor a doce meses, el costo no podr&aacute; exceder del
              equivalente a tres d&iacute;as de salario m&iacute;nimo vigente en el Distrito
              Federal. Si se realizaran modificaciones sustanciales al Aviso de Privacidad y surgen
              situaciones que ameriten nuevamente el ejercicio de un mismo derecho en menos de doce
              meses, no habr&aacute; costo. Para ejercer cualquiera de dichos derechos (ARCO)
              deber&aacute; dirigirse al &aacute;rea LEGAL de LA NACIONAL PIGNORACIONES Y REMATES,
              S.A. DE C.V., quien es la responsable de nuestro Departamento de Protecci&oacute;n de
              Datos Personales, ubicado en DONATO GUERRA 235 SUR, INT. 201, COL. JORGE ALMADA,
              CULIAC&Aacute;N, SINALOA, C&Oacute;DIGO POSTAL 80200, o bien, comun&iacute;quese a
              nuestro n&uacute;mero telef&oacute;nico del centro de atenci&oacute;n al cliente 01
              800 215 1515 o v&iacute;a correo electr&oacute;nico a info@maxilana.com, el cual
              solicitamos confirme v&iacute;a telef&oacute;nica para garantizar su correcta
              recepci&oacute;n. Importante: LA NACIONAL PIGNORACIONES Y REMATES, S.A. de C.V. se
              reserva cualquier tipo de modificaci&oacute;n a este Aviso de Privacidad, por lo que
              hace de su conocimiento que cualquier cambio al contenido del mismo le ser&aacute;
              comunicado oportunamente a trav&eacute;s de su sitio web https://www.maxilana.com/
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default PrivacyPage;
