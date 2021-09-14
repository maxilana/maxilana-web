import { NextPage } from 'next';
import { Layout } from '~/components/layout';
import { SideMenu } from '~/components/common';
import legalLinks from 'modules/mock/legal.json';
import { PropsWithCities } from '~/types/PropsWithCities';

export { default as getStaticProps } from '~/utils/defaultGetStaticProps';

const TermsConditionsPage: NextPage<PropsWithCities> = ({ cities }) => {
  return (
    <Layout cities={cities} title="Términos y Condiciones">
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
          <h1 className="h4 mb-8">
            Términos y condiciones en la regulación de la utilización del sitio web de Maxilana
          </h1>
          <div className="space-y-2">
            <p>Pol&iacute;ticas y Condiciones Generales</p>

            <p>1- Objeto</p>

            <p>
              El objeto de las presentes Condiciones Generales (en adelante las
              &quot;Condiciones&quot;) es el de regular la utilizaci&oacute;n del sitio web
              www.maxilana.com (en adelante &quot;LA NAPYR&rdquo;), con domicilio en
              Culiac&aacute;n, Sinaloa. La web www.maxilana.com ha sido dise&ntilde;ada y
              desarrollada con el objetivo de servir como medio de comunicaci&oacute;n para sus
              productos y servicios, as&iacute; como de toda la informaci&oacute;n relacionada con
              ellos, y de canal de comercializaci&oacute;n en las condiciones marcadas el presente
              documento de Condiciones Generales. La utilizaci&oacute;n del sitio web, atribuye a
              quien haga uso del mismo, la condici&oacute;n de Usuario (en adelante
              &quot;Usuario&quot;). De acuerdo con la legislaci&oacute;n vigente, dispuesta por el
              art&iacute;culo 1803 y dem&aacute;s relativos del C&oacute;digo Civil Federal, las
              presentes Condiciones Generales se encuentran publicadas desde al menos 48 horas antes
              de cualquier tipo de actividad por lo que el usuario declara conocer y aceptar sin
              reserva ni excepci&oacute;n alguna, todas y cada una de las Condiciones Generales que
              en este documento se exponen. A trav&eacute;s de www.maxilana.com se facilitar&aacute;
              a todos los Usuarios Registrados, la posibilidad de acceder a los contenidos,
              servicios y dem&aacute;s informaci&oacute;n concerniente al objeto de la presente
              entidad. Las presentes Condiciones Generales constituyen &iacute;ntegramente lo
              convenido entre las partes en lo referente a las transacciones &ldquo;en
              l&iacute;nea&rdquo; de compraventa entre LA NAPYR y los usuarios. LA NAPYR est&aacute;
              facultada para modificar unilateralmente todas y cada una de las obligaciones
              dispuestas en las presentes Condiciones Generales, con el debido cumplimiento de los
              plazos y procedimientos marcados por la normativa vigente. Igualmente est&aacute;
              capacitada para reestructurar, modificar o eliminar cualquier informaci&oacute;n,
              servicio o contenido incluido en www.maxilana.com sin necesidad de previo aviso. La
              modificaci&oacute;n de cualquiera de las presentes condiciones generales para un caso
              particular s&oacute;lo tendr&aacute; validez cuando haya sido recogida por escrito y
              firmada por el representante legal de cada parte o que firme el consumidor
              directamente. En caso de no aceptar en forma absoluta y completa los t&eacute;rminos y
              condiciones de este contrato, el usuario deber&aacute; abstenerse de acceder, utilizar
              y observar el sitio web www.maxilana.com En caso de que el usuario acceda, utilice y
              observe el sitio www.maxilana.com, se considerar&aacute; como una absoluta y expresa
              aceptaci&oacute;n de los T&eacute;rminos y Condiciones de Uso en &eacute;l
              estipulados. La sola utilizaci&oacute;n de dicha p&aacute;gina de Internet le otorga
              al p&uacute;blico en general la condici&oacute;n de Usuario e implica la
              aceptaci&oacute;n, plena e incondicional de todas y cada una de las condiciones
              generales y particulares incluidas en estos T&eacute;rminos y Condiciones de Uso
              publicados por LA NAPYR.
            </p>

            <p>2- Derechos y Obligaciones del Usuario</p>

            <p>2.1 Condiciones de Acceso y Uso</p>

            <p>
              A trav&eacute;s de la direcci&oacute;n emplazada en www.maxilana.com, cualquier
              usuario podr&aacute; acceder gratuitamente a la informaci&oacute;n contenida en el
              citado sitio web. Las condiciones de acceso a la web sometida a las disposiciones
              legales vigentes en cada momento as&iacute; como a los principios de buena fe y uso
              l&iacute;cito por parte del Usuario, prohibi&eacute;ndose expresa y taxativamente
              cualquier tipo de actuaci&oacute;n que pudiera ir en detrimento o perjuicio de LA
              NAPYR o de terceros. LA NAPYR exige la previa suscripci&oacute;n y su correspondiente
              registro como Usuario (de ahora en adelante Usuario Registrado). En lo que al
              tratamiento de datos personales se refiera, navegaci&oacute;n y utilizaci&oacute;n del
              servicio v&eacute;ase la Pol&iacute;tica de Privacidad de LA NAPYR.
            </p>

            <p>2.1.1 Registro de Usuario</p>

            <p>
              De conformidad con lo dispuesto anteriormente, LA NAPYR se reserva algunos de los
              Servicios ofrecidos a trav&eacute;s del sitio web a los Usuarios Registrados de
              www.maxilana.com mediante la cumplimentaci&oacute;n del correspondiente formulario de
              registro de Usuarios de www.maxilana.com, que estar&aacute; a disposici&oacute;n de
              los Usuarios que lo deseasen. El Usuario se compromete a seleccionar, usar y conservar
              su identificador de usuario y su contrase&ntilde;a o &quot;password&quot; (en adelante
              y de modo conjunto las &quot;Claves de Acceso&quot;) de conformidad con lo establecido
              en las cl&aacute;usulas siguientes.
            </p>

            <p>2.1.2 Asignaci&oacute;n de las Claves de Acceso</p>

            <p>
              El Usuario tendr&aacute; la opci&oacute;n de elegir e indicar sus propias Claves de
              Acceso. La asignaci&oacute;n de las Claves de Acceso se produce de manera
              autom&aacute;tica, siendo el &uacute;nico criterio empleado al efecto, la inexistencia
              de unas Claves de Acceso previas que fueren id&eacute;nticas a las seleccionadas por
              el Usuario. En tal caso, el Usuario podr&aacute; en cualquier momento cambiarlas por
              cualesquiera otras, siempre de conformidad con lo previsto en los p&aacute;rrafos
              anteriores y posteriores. Estamos comprometidos a proteger su privacidad en el nivel
              m&aacute;s alto posible de seguridad. Toda su informaci&oacute;n personal, incluyendo
              n&uacute;mero de tarjeta de cr&eacute;dito, nombre y direcci&oacute;n es encriptada,
              por lo que no se puede leer cuando est&aacute; siendo transmitida desde su computadora
              a nuestro servidor Usamos la tecnolog&iacute;a Secure Socket Layer (SSL), que permite
              de extremo a extremo protecci&oacute;n de los datos.
            </p>

            <p>2.1.3 Uso y Custodia</p>

            <p>
              El Usuario se compromete a hacer un uso l&iacute;cito y diligente de las Claves de
              Acceso, as&iacute; como a no poner a disposici&oacute;n de terceros sus Claves de
              Acceso. El Usuario se compromete a comunicar fehacientemente al Webmaster (v&iacute;a
              correo electr&oacute;nico a info@maxilana.com) a la mayor brevedad, la p&eacute;rdida
              o robo de las Claves de Acceso as&iacute; como cualquier riesgo de acceso a las mismas
              por un tercero. Las Claves de Acceso solamente podr&aacute;n ser utilizadas por los
              Usuarios a las que se les haya asignado. LA NAPYR queda exonerada de cualquier tipo de
              responsabilidad que se pueda devengar por los da&ntilde;os y perjuicios causados o
              sufridos por el uso fraudulento o falta de diligencia en la guarda y custodia de las
              Claves de Acceso, p&eacute;rdida o uso contraviniendo lo dispuesto en estas
              Condiciones Generales.
            </p>

            <p>2.2 Contenido y Actuaciones del Usuario</p>

            <p>
              El Usuario se compromete a hacer un uso l&iacute;cito, diligente, honrado y correcto
              de cuanta informaci&oacute;n o contenido tenga acceso ya sea a trav&eacute;s de
              www.maxilana.com o de alg&uacute;n tercero proporcionado por LA NAPYR., y todo ello
              bajo los principios de la buena fe y con respeto en todo momento a la legalidad
              vigente. El Usuario deber&aacute; abstenerse de obtener, salvo para uso personal,
              cuanta informaci&oacute;n (enti&eacute;ndase por informaci&oacute;n como cualquier
              mensaje, archivos de sonido, fotograf&iacute;as, dibujos, software y en general
              cualquier clase o tipo de archivo inform&aacute;tico, gr&aacute;fico, etc.) que sea
              propiedad de LA NAPYR. Igualmente el Usuario adquiere el compromiso de no provocar ni
              maliciosa ni intencionadamente da&ntilde;os o perjuicios que puedan menoscabar,
              alterar el propio sitio web as&iacute; como no introducir, ni difundir los denominados
              &quot;virus inform&aacute;ticos&quot; que puedan producir alteraciones no autorizadas
              de los contenidos o sistemas integrantes del sitio web. El compromiso adquirido se ha
              de regir sobre la utilizaci&oacute;n contenidos de conformidad con lo dispuesto en la
              ley, moral y orden p&uacute;blico; no copiar, reproducir, distribuir, ceder,
              transformar o modificar los contenidos sin previo consentimiento y por escrito de LA
              NAPYR o persona por &eacute;ste delegada. A este respecto, LA NAPYR se exonera de
              cualquier tipo de fallo o virus inform&aacute;tico introducido por terceros. El
              usuario se compromete a cumplir todos los requisitos dispuestos en relaci&oacute;n a
              los derechos de propiedad intelectual, industrial y dem&aacute;s an&aacute;logos.
            </p>

            <p>2.3 Contenido de www.maxilana.com</p>

            <p>
              www.maxilana.com tiene como objetivo prioritario proporcionar un servicio de
              informaci&oacute;n y venta de productos y servicios. La Base de Datos propiedad de LA
              NAPYR contiene toda la informaci&oacute;n necesaria que el cliente pudiese necesitar,
              as&iacute; como una actualizaci&oacute;n constante de los precios, descripci&oacute;n
              t&eacute;cnica completa, de acuerdo a las leyes vigentes de la PROFECO. La
              informaci&oacute;n proporcionada no deber&aacute; ser considerada en ning&uacute;n
              momento ni completa ni exhaustiva debido a la variada gama de productos y servicios
              existentes en el sector. LA NAPYR, en caso de error en alguno de los precios de sus
              productos o servicios se compromete a comunicarlo de forma inmediata al usuario y a
              devolver cualquier importe pagado por el mismo en caso de que el precio real del mismo
              no sea de su inter&eacute;s, sin ning&uacute;n costo adicional. LA NAPYR manifiesta
              que el producto ofrecido corresponde con la fotograf&iacute;a y descripci&oacute;n
              t&eacute;cnica del mismo. No obstante queda exonerada de responsabilidad para aquellos
              supuestos en los que por errores t&eacute;cnicos o humanos hubiese equivocaciones o
              variaciones entre la fotograf&iacute;a, la descripci&oacute;n t&eacute;cnica y el
              precio. Igualmente se pone de manifiesto que las fotograf&iacute;as tienen un mero
              car&aacute;cter orientativo pudiendo existir variaciones en lo que a su aspecto
              f&iacute;sico respecta pero sin menoscabar la integridad y prestaciones del producto
              solicitado.
            </p>

            <p>3- Derechos y Obligaciones de LA NAPYR</p>

            <p>
              LA NAPYR responder&aacute; &uacute;nica y exclusivamente de los servicios que preste
              por ella misma y de los contenidos directamente originados por el propio sitio web
              identificado con su correspondiente copyright (derechos reservados). LA NAPYR se
              compromete a la adopci&oacute;n de los medios y medidas necesarias que permitan
              garantizar la seguridad y privacidad en la comunicaciones. No responder&aacute;
              cuando, adoptadas las pertinentes medidas de seguridad, &eacute;stas fueren vulneradas
              por agentes externos. LA NAPYR no ser&aacute; responsable ni siquiera de forma
              indirecta o subsidiaria, por ning&uacute;n contenido, informaci&oacute;n,
              opini&oacute;n o manifestaci&oacute;n de cualquier tipo, que tenga su origen en el
              Usuario o terceras personas o entidades y que tengan acceso, transmitan, comuniquen,
              traten, exhiban o vendan dicha informaci&oacute;n al sitio web www.maxilana.com LA
              NAPYR se reserva el derecho a suspender temporalmente la prestaci&oacute;n del
              servicio sin previo aviso al Usuario, siempre y cuando sea necesario para efectuar
              operaciones de mantenimiento, actualizaci&oacute;n o mejora del servicio. Igualmente
              podr&aacute; modificar las condiciones de acceso y/o concreta ubicaci&oacute;n del
              contenido integrante del sitio web, as&iacute; como impedir, restringir, bloquear,
              suprimir o retirar el acceso a los servicios a los Usuarios cuando &eacute;stos no
              hicieren un uso l&iacute;cito, honrado y diligente de los servicios prestados en el
              Portal. En la misma l&iacute;nea podr&aacute; retirar, bloquear o restringir el uso de
              los contenidos introducidos por terceras personas que fueren il&iacute;citos, racistas
              delictivos, de apolog&iacute;a de terrorismo, violaci&oacute;n de derechos humanos,
              difamatorios, pornogr&aacute;ficos, constitutivos de estafa o de cualquier otro modo
              que infrinjan las leyes o normativas aplicables bien sean nacionales como
              internacionales. LA NAPYR no asegura la disponibilidad y continuidad permanente del
              Portal debido a interrupciones, fallos, etc. as&iacute; como tampoco responder&aacute;
              de los da&ntilde;os y perjuicios que pueda causar a los Usuarios por los virus
              inform&aacute;ticos o agentes externos que terceras personas puedan depositar en el
              sitio web o en los documentos electr&oacute;nicos y ficheros almacenados en el sistema
              inform&aacute;tico. El Portal pone a disposici&oacute;n de los Usuarios ciertas
              herramientas tales como, botones, banners, links o enlaces que permitan al Usuario
              acceder a otros sitios relacionados con el objeto social del sitio web u otros
              diferentes. La instalaci&oacute;n de estas herramientas tiene como fin &uacute;ltimo
              proporcionar y facilitar la navegaci&oacute;n al Usuario, no siendo responsable LA
              NAPYR de los sitios a los que acceda el Usuario a trav&eacute;s de su p&aacute;gina.
              Por todo ello ser&aacute; el Usuario qui&eacute;n bajo su propia responsabilidad
              acceder&aacute; a trav&eacute;s de esos hiperv&iacute;nculos. Por su parte LA NAPYR
              tratar&aacute; en la medida de sus posibilidades de comprobar dichos
              hiperv&iacute;nculos, restringiendo, bloqueando o suspendiendo dichos botones cuando
              atentasen contra el principio descrito en las presentes Condiciones Generales.
            </p>

            <p>3.1 Respecto a los productos que se comercializan en nuestra p&aacute;gina web</p>

            <p>
              La actividad de LA NAPYR es poner al alcance del p&uacute;blico una amplia gama de
              art&iacute;culos usados. El objetivo es ofrecer siempre el mejor servicio a los
              clientes. Un servicio r&aacute;pido, eficaz y c&oacute;modo para que puedan adquirir
              los productos de una forma pr&aacute;ctica. Para ello los productos que se
              comercializan se tienen en inventario salvo alguna falta del mismo debido a problemas
              ajenos a la empresa o a una falta de servicio por parte de los proveedores/fabricantes
              de los mismos (contactando de inmediato con el cliente para comunicarlo y poder de
              alguna manera solucionar la entrega de su pedido). Los productos que se ofrecen son de
              la m&aacute;s alta calidad y pertenecen a marcas fabricadas por empresas de reconocido
              prestigio nacional e internacional. Todos los art&iacute;culos presentados por LA
              NAPYR en su p&aacute;gina web est&aacute;n respaldados por esta condici&oacute;n.
            </p>

            <p>3.2 Respecto a los precios de los productos</p>

            <p>
              Los precios de los productos son los precios de venta al p&uacute;blico incluido el
              IVA (Impuesto al Valor Agregado) que correspondiera. A su vez los mismos se establecen
              de acuerdo a la pol&iacute;tica de la empresa, intentando ser lo m&aacute;s fieles a
              los usuarios, ofreciendo siempre la mayor calidad al mejor precio.
            </p>

            <p>3.3 Respecto a los gastos de env&iacute;o</p>

            <p>
              El valor del gasto de env&iacute;o se incluye en el pedido al momento de hacer la
              compra, una vez el cliente haya definido el lugar de entrega correspondiente. En este
              sentido, la pol&iacute;tica de la empresa es intentar que los pedidos lleguen al
              destinatario en un tiempo razonable y la &uacute;nica forma de ofrecer un servicio
              &oacute;ptimo a los usuarios son las que hemos descrito en este apartado. Pero sin
              embargo, si el usuario desea otra forma de env&iacute;o, la empresa es lo
              suficientemente flexible como para estudiar dicha posibilidad e intentar satisfacer
              las necesidades del cliente.
            </p>

            <p>4- Ofertas, Precios, Pagos y Plazos de Entrega</p>

            <p>
              En base a su pol&iacute;tica comercial, LA NAPYR podr&aacute; realizar variaciones
              finales del precio ya sea por fidelizaci&oacute;n, por adquisici&oacute;n de productos
              de cierta entidad o relevancia as&iacute; como otros que pueda estipular en su debido
              momento. No obstante, ser&aacute; LA NAPYR quien libre y voluntariamente ofrezca estos
              descuentos y/o rebajas, a quienes estime oportuno, no pudiendo ser exigidos ni
              solicitados en ning&uacute;n momento por los clientes. LA NAPYR se reserva el derecho
              a modificar unilateralmente los precios de los productos sin necesidad de previo
              aviso. Los descuentos adicionales y regalos promocionales por cantidad o volumen de
              pedido ser&aacute;n exclusivamente los recogidos por LA NAPYR en su oferta y
              tendr&aacute;n validez hasta la expiraci&oacute;n del periodo se&ntilde;alado o el
              agotamiento de su stock. Los costos de manipulaci&oacute;n y env&iacute;o ser&aacute;n
              por cuenta del cliente y vendr&aacute;n especificados en el pedido. Estos costos
              podr&aacute;n variar en funci&oacute;n de un nuevo destino elegido por los clientes.
              Para realizar una compra ser&aacute; indispensable realizar un carrito de la compra y
              haber procedido previamente a rellenar el correspondiente formulario de
              suscripci&oacute;n, posteriormente habr&aacute; que emitir el pedido con los precios
              definitivos de los productos as&iacute; como con los plazos aproximados de entrega y
              proceder al pago mediante cualquiera de las posibilidades de forma de pago que en cada
              momento est&eacute;n a disposici&oacute;n del cliente en el sitio web: Dep&oacute;sito
              bancario, Transferencia Bancaria o Tarjeta de Cr&eacute;dito a trav&eacute;s de
              PayPal. Para m&aacute;s detalles vea nuestra p&aacute;gina de Formas de Pago. El plazo
              de entrega depender&aacute; de los productos y del domicilio al que se efect&uacute;e
              el env&iacute;o. Los env&iacute;os de mercanc&iacute;as pagadas por transferencia
              bancaria s&oacute;lo se enviar&aacute;n una vez realizado el pago. En caso de no
              recibirse el pago del producto en un plazo de 3 d&iacute;as h&aacute;biles, el pedido
              ser&aacute; anulado. La entrega de cualquiera de los productos objeto de compraventa
              al amparo de las presentes condiciones generales, se encuentra sujeta al plan de
              disponibilidad de LA NAPYR. &Eacute;ste realizar&aacute; sus m&aacute;s encarecidos
              esfuerzos con el fin de efectuar las entregas en la fecha prevista, ofertada o
              confirmada. Sin embargo, no adquirir&aacute; responsabilidad alguna por fallos en el
              cumplimiento de esas fechas siempre y cuando sea por causas ajenas a LA NAPYR. Si el
              retraso en la entrega es imputable a LA NAPYR, &eacute;ste devolver&aacute; de manera
              &iacute;ntegra el importe pre-pagado por la mercanc&iacute;a cuya entrega se hubiese
              retrasado. Asimismo, LA NAPYR no resultar&aacute; responsable por ning&uacute;n lucro
              cesante o da&ntilde;o emergente, directo o indirecto, y su responsabilidad
              m&aacute;xima en cualquier caso ser&aacute; el valor de la mercanc&iacute;a. Si el
              cliente cancela total o parcialmente pedidos antes de que LA NAPYR hubiera procedido a
              la expedici&oacute;n de los mismos, LA NAPYR podr&aacute; exigir el pago de una
              compensaci&oacute;n en concepto de gastos y tramitaci&oacute;n, consistente en el 10 %
              del valor de la mercanc&iacute;a rechazada. Los clientes podr&aacute;n adherirse a
              cualquiera de las modalidades de pago ofrecidas por LA NAPYR. Los productos adquiridos
              deben abonarse despu&eacute;s de realizar el pedido haciendo llegar a LA NAPYR el
              importe que figura en el mismo, mediante alguno de los medios de pago seleccionados y
              que se encuentren activados en el sitio web en cada momento que, para mayor seguridad
              del cliente, son: Dep&oacute;sito o transferencia bancaria a la cuenta indicada en el
              momento de la confirmaci&oacute;n del pedido. PayPal a trav&eacute;s de una Tarjeta de
              Cr&eacute;dito. Una vez comprobado el pago se iniciar&aacute; por parte de LA NAPYR la
              tramitaci&oacute;n del pedido. La factura digital de la tienda virtual se
              enviar&aacute; por correo electr&oacute;nico en caso de ser solicitada por el cliente
              en el momento de la compra. LA NAPYR procurar&aacute; entregar los productos de modo
              id&eacute;ntico a como aparecen recogidos en la web. Sin embargo, sus proveedores
              pueden variar en ocasiones ciertas caracter&iacute;sticas o cantidades ofertadas en un
              lote sin previo aviso. LA NAPYR podr&aacute; asimismo variar &eacute;stas de manera no
              sustancial, sin incurrir por ello en ning&uacute;n tipo de responsabilidad. A la
              entrega de la mercanc&iacute;a, el Usuario deber&aacute; firmar el comprobante de
              entrega dando su conformidad a la entrega efectuada. La conformidad del Usuario en el
              comprobante de entrega implica la renuncia a cualquier tipo de reclamaci&oacute;n o
              denuncia respecto a la mercanc&iacute;a pedida y recibida. Si no se cumplen estas
              condiciones, LA NAPYR no asumir&aacute; ninguna responsabilidad sobre dicha
              mercanc&iacute;a. Una vez que LA NAPYR entrega la mercanc&iacute;a a la empresa de
              transporte, cualquier desperfecto que sufra la misma ser&aacute; por cuenta de esa
              empresa, a la que deber&aacute; reclamar en este caso.
            </p>

            <p>5- Devoluciones y Derecho de Re-embolso</p>

            <p>
              LA NAPYR se reserva el derecho de exigir una indemnizaci&oacute;n para compensar los
              posibles da&ntilde;os sufridos por las mercanc&iacute;as, as&iacute; como para
              recuperar los gastos directos ocasionados por la devoluci&oacute;n. LA NAPYR solamente
              aceptar&aacute; la devoluci&oacute;n de la mercanc&iacute;a si: a) En el plazo
              m&aacute;ximo 30 d&iacute;as a partir de la fecha de recibido, el comprador ejercita
              su derecho de Devoluci&oacute;n (ver pol&iacute;ticas de devoluci&oacute;n) LA NAPYR
              aceptar&aacute; el ejercicio del mencionado derecho &uacute;nica y exclusivamente
              cuando la mercanc&iacute;a estuviese en perfecto estado y listo para la venta, con su
              correspondiente embalaje original y habiendo cumplido los requisitos establecidos en
              el punto que describe la entrega. b) La mercanc&iacute;a estuviese defectuosa desde el
              primer momento: A este respecto LA NAPYR estar&aacute; a lo dispuesto en la Ley,
              procediendo a sustituir inmediatamente el producto por otro con id&eacute;nticas
              condiciones y prestaciones. c) La mercanc&iacute;a no le fuese proporcionada en el
              plazo que previamente hubiese indicado LA NAPYR en la confirmaci&oacute;n del pedido.
              d) LA NAPYR proceder&aacute; igualmente a devolver el importe de la mercanc&iacute;a
              cuando por causas no imputables (ya sean directas o indirectas) a ella, se viese
              imposibilitado de servirlo. e) LA NAPYR aceptar&aacute; la devoluci&oacute;n de la
              mercanc&iacute;a cuando por causas imputables a ella, el producto solicitado no se
              correspondiese con el solicitado por el cliente.
            </p>

            <p>5.1 Procedimiento para devoluciones por servicio de mensajer&iacute;a:</p>

            <p>
              Se podr&aacute; devolver la mercanc&iacute;a, en caso de los motivos anteriores,
              utilizando la misma compa&ntilde;&iacute;a de mensajer&iacute;a que le entreg&oacute;
              la mercanc&iacute;a, envi&aacute;ndonos el n&uacute;mero de gu&iacute;a de la
              devoluci&oacute;n al siguiente correo: info@maxilana.com asegurando perfectamente el
              paquete el cual deber&aacute; contener la factura original, una nota aclaratoria que
              indique el motivo de la devoluci&oacute;n, y si deseas la reposici&oacute;n del
              art&iacute;culo o el reembolso de tu dinero anexando una cuenta bancaria donde
              realizaremos la devoluci&oacute;n de su dinero en las pr&oacute;ximas 72 horas. Las
              presentes Condiciones Generales se resolver&aacute;n autom&aacute;ticamente por la
              extinci&oacute;n de &ldquo;LA NAPYR.&rdquo; o por la presentaci&oacute;n de
              solicitudes de declaraci&oacute;n de quiebra (voluntaria o necesaria),
              suspensi&oacute;n de pagos, concurso de acreedores, cesi&oacute;n general de bienes a
              favor de acreedores, cese de las actividades propias de la empresa, etc. No obstante
              lo anterior, LA NAPYR podr&aacute; considerar que cuando los productos solicitados por
              el cliente fueren claramente personalizados y realizados conforme a las
              especificaciones del consumidor, u otros que en su momento determine, no
              prevalecer&aacute; el citado derecho de resoluci&oacute;n ni las presentes condiciones
              generales, prevaleciendo por tanto el contrato de compraventa interpartes suscrito.
              Dicho contrato ser&aacute; emitido por LA NAPYR y remitido al usuario registrado
              &ldquo;CLIENTE&rdquo;, con el objeto de aceptar las condiciones en &eacute;l
              dispuestas y renunciando a las presentes Condiciones Generales.
            </p>

            <p>6- Propiedad Intelectual</p>

            <p>
              La totalidad de los contenidos a los que se acceda a trav&eacute;s del servicio
              prestado por www.maxilana.com est&aacute;n sujetos a los Derechos de Propiedad
              Intelectual e Industrial de LA NAPYR. Dicho contenido no podr&aacute; ser usado,
              duplicado, distribuido, vendido, explotado o cualquier otra forma con prop&oacute;sito
              comercial o no, sin el previo y preceptivo consentimiento y por escrito de su titular.
              Todos los contenidos y partes integrantes de la p&aacute;gina web www.maxilana.com han
              sido incluidos conforme a los principios de la buena fe, con informaci&oacute;n
              procedente total o parcialmente de fuentes externas a la propia entidad raz&oacute;n
              por la cual LA NAPYR no se responsabiliza en manera alguna de la inexactitud o no
              actualizaci&oacute;n de los contenidos ofertados. Por el contrario todos aquellos
              contenidos procedentes de fuentes internas estar&aacute;n debidamente identificados
              con su copyright. La entidad se reserva el derecho o facultad de efectuar cualquier
              cambio en cualquier momento sin necesidad de previo aviso. Todos los contenidos
              incluidos en la p&aacute;gina procedentes de fuentes internas que lleven su signo
              identificativo de copyright, son responsabilidad &uacute;nica y exclusivamente de LA
              NAPYR. El Usuario, declara haber le&iacute;do, conocer y aceptar las presentes
              Condiciones Generales en toda su extensi&oacute;n.
            </p>

            <p>Copyright &copy; www.maxilana.com Todos los derechos reservados.</p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default TermsConditionsPage;
