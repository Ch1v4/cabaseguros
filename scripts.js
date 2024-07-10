function enviarWhatsApp(plan) {
    var numero = "5493464528114";
    var seleccion = plan || document.getElementById("plan-selector").value;
    var mensaje = "Hola, me gustaria recibir más información sobre Seguros para ";

    switch (seleccion) {
        case "auto":
            mensaje += "Autos.";
            break;
        case "moto":
            mensaje += "Motos.";
            break;
        case "accidentes":
            mensaje += "Accidentes Personales.";
            break;
        case "art":
            mensaje += "ART.";
            break;
        case "hogar":
            mensaje += "el Hogar.";
            break;
        case "comercio":
            mensaje += "el Comercio.";
            break;
        case "incendio":
            mensaje += "Incendio.";
            break;
        case "agro":
            mensaje += "Agro - Granizo.";
            break;
        case "monopatin":
            mensaje += "Monopatín / Moto Eléctrica.";
            break;
        case "bicicleta":
            mensaje += "Bicicleta.";
            break;
        case "foodtruck":
            mensaje += "Food Truck.";
            break;
        case "salud":
            mensaje += "Salud.";
            break;
        case "retiro":
            mensaje += "Retiro.";
            break;
        case "rc":
            mensaje += "Responsabilidad Civil.";
            break;
        case "rc_profesional":
            mensaje += "RC Profesional (Mala Praxis).";
            break;
        default:
            mensaje = "";
            break;
    }

    if (mensaje !== "") {
        var url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);
        window.open(url, '_blank');
    }
}

function mostrarNumerosImportantes() {
    Swal.fire({
        title: 'Números Importantes',
        html: `
            <h3>Reclamos de 3º</h3>
            <p>0810-222-5588<br></p>
            <h3>Asistencia Mecánica</h3>
            <p>0800-800-0022</p><br>
            <h3>Asistencia para</h3>
            <p>
                • Combinado Familiar<br>
                • Integral de Consorcio<br>
                • Integral de Comercio e Industria<br>
                • Robo de Identidad<br>
                • Seguro de Salud
            </p>
            <p>0800-444-0001</p>
            <h3>ART</h3>
            <p>0800-222-2322<br>Solo denuncias</p>
            <p>0800-222-3535<br>Consultas y Evoluciones</p>
            <h3>Accidentes Personales</h3>
            <p>0800-222-3123<br>AP Prestacional</p>
            <h3>Atención al Cliente FedPat</h3>
            <p>+5492214290200</p>
            <h3>Consultas ART</h3>
            <p>+5491143469200</p>
            <h3>Atención al Cliente FedPat</h3>
            <p>0810-222-5588<br>Línea Única</p>
        `,
        customClass: {
            popup: 'left-aligned'
        },
        width: '80%',
        padding: '2em',
    });
}


function mostrarInformacionEmpresas() {
    Swal.fire({
        title: 'SEGUROS OBLIGATORIOS',
        html: `
            <h3>ART</h3>
            <p>Asegurá tu personal con el respaldo de la aseguradora número uno en situación financiera. Desde 1921 amparando los accidentes laborales, contamos con áreas especializadas que brindan un adecuado asesoramiento y una eficaz gestión de los riesgos y accidentes de trabajo.</p>
            <h3>VIDA OBLIGATORIO</h3>
            <ul>
                <li>Vida Obligatorio Dec. 1.567/74: para todos los Empleadores con trabajadores en relación de dependencia (con excepción de los trabajadores rurales)</li>
                <li>Vida Obligatorio para Trabajadores Domésticos: Seguro de Contratación Obligatoria por el Decreto 1.567/74 y sus modificatorias para todos los Empleadores con trabajadores domésticos</li>
            </ul>
            <h3>VIDA COLECTIVO POR CONVENIOS COLECTIVOS LABORALES</h3>
            <ul>
                <li>Vida Colectivo por Convenio Mercantil: Seguro de Contratación Obligatoria por el CCT N° 130/75 y sus modificatorias para todos los Empleadores con trabajadores en actividad de comercio</li>
                <li>Vida Colectivo por Convenios Colectivos de Trabajo: Seguros de Indemnización o de Contratación Obligatoria conforme el Convenio Colectivo de Trabajo Correspondiente a cada Actividad</li>
            </ul>
            <h3>VIDA COLECTIVO POR LEY DE CONTRATO DE TRABAJO</h3>
            <ul>
                <li>Seguro de Indemnización Obligatoria por la Ley N° 20.744 (art 248 y 212 4to párrafo) y sus modificatorias para todos los Empleadores.</li>
                <li>Muerte por Enfermedad o Accidente.</li>
                <li>Invalidez Total y Permanente por Enfermedad o Accidente.</li>
            </ul>
            <h3>VIDA COLECTIVO PARA TRABAJADORES RURALES</h3>
            <ul>
                <li>Seguro de Contratación Obligatoria por la Ley. N° 16.600 y sus modificatorias para todos los Empleadores con trabajadores rurales</li>
                <li>Muerte por Enfermedad o Accidente</li>
                <li>Invalidez Total y Permanente por Enfermedad o Accidente</li>
            </ul>
            <h2>SEGUROS DE PROTECCION PATRIMONIAL</h2>
            <h3>INCENDIO</h3>
            <ul>
                <li>Federación Patronal Seguros, líder en situación financiera dentro del mercado asegurador, te ofrece el seguro de incendio para tu industria, local, oficina o edificio.</li>
                <li>Incendio Edificio</li>
                <li>Incendio Contenido, incendio mercaderías</li>
                <li>Incendio instalaciones y Maquinarias</li>
                <li>Responsabilidad Civil linderos</li>
            </ul>
            <h3>INTEGRAL DE COMERCIO O INDUSTRIA</h3>
            <p>Te ofrecemos una solución totalmente flexible para proteger los bienes de tu oficina, negocio o industria. Este seguro se adapta al tamaño de tu empresa y al sector y tipo de actividad, ya sea minorista, mayorista o de servicios. Tu negocio es tu principal fuente de ingresos, tenerlo seguro, es mejor.</p>
            <h3>COBERTURAS PRINCIPALES</h3>
            <ul>
                <li>Daños totales y parciales al local por incendio, explosión o derrumbe</li>
                <li>Daños de la naturaleza: por rayo, vientos huracanados, granizo, terremoto.</li>
                <li>Gastos por limpieza de contenidos y remoción de escombros; sueldos y jornales, alquileres, gastos fijos.</li>
                <li>Daños a los carteles y marquesinas</li>
                <li>Daños a las instalaciones y/o bienes de uso por incendio, explosión, derrumbe, rayo</li>
                <li>Daños a la mercadería por incendio, robo, pérdida de frío.</li>
                <li>Daños a cristales</li>
                <li>Daños a la tecnología del comercio por incendio, rayo, explosión, robo, daños eléctricos, accidentes.</li>
            </ul>
            <h3>COBERTURAS PARA EL RESPONSABLE DEL COMERCIO</h3>
            <ul>
                <li>Responsabilidad Civil hacia terceros, emergente del denominado “deber de seguridad”</li>
                <li>Adicionales de responsabilidad civil específicos para cada actividad</li>
                <li>Cobertura de accidentes personales para la persona responsable</li>
            </ul>
            <h3>TRANSPORTE DE MERCADERIA</h3>
            <p>Asegura tu carga de aquellas pérdidas que puedan sufrir durante el transporte terrestre, marítimo, y/o aéreo. Te ofrecemos cobertura para viajes locales, importaciones o exportaciones. Disfrutá de la tranquilidad de que tu mercadería está respaldada por la aseguradora número uno en situación financiera del país.</p>
            <h3>ESPECIAL CEREALES</h3>
            <ul>
                <li>Se cubren las pérdidas y averías de las mercancías transportadas a causa de choque, vuelco, desbarrancamiento o descarrilamiento del vehículo transportador, derrumbe, caída de árboles o postes, incendio, explosión, rayo, huracán, ciclón, tornado, inundación, aluvión y alud.</li>
            </ul>
            <h3>Coberturas adicionales:</h3>
            <ul>
                <li>Robo</li>
                <li>Básica Harina</li>
                <li>Robo Harina</li>
                <li>Apertura de boquilla (5,10 o 15%) del valor de la carta de porte</li>
            </ul>
            <h3>TRANSPORTE TERRESTRE LOCAL</h3>
            <ul>
                <li>Pólizas por viaje o por periodo donde se cubren las pérdidas y averías de las mercancías transportadas a causa de choque, vuelco, desbarrancamiento o descarrilamiento del vehículo transportador, derrumbe, caída de árboles o postes, incendio, explosión, rayo, huracán, ciclón, tornado, inundación, aluvión y alud.</li>
                <li>Robo.</li>
                <li>Robo en carga y descarga.</li>
                <li>Hurto, desaparición y falta de entrega.</li>
                <li>Daños en operaciones de carga y descarga.</li>
                <li>Paralización de máquina frigorífica.</li>
                <li>Todo riesgo.</li>
                <li>Eximición responsabilidad transportista.</li>
                <li>Huelga y Vandalismo.</li>
            </ul>
            <h3>ESPECIAL GANADO</h3>
            <ul>
                <li>Muerte del animal o sacrificios por cuestiones humanitarias a causa de choque, vuelco, desbarrancamiento o descarrilamiento del vehículo transportador, derrumbe, caída de árboles o postes, incendio, explosión, rayo, huracán, ciclón, tornado, inundación, aluvión y alud.</li>
            </ul>
            <h3>Coberturas adicionales:</h3>
            <ul>
                <li>Robo</li>
                <li>Asfixia y/o aplastamiento</li>
            </ul>
            <h3>ESPECIAL MAQUINARIAS</h3>
            <ul>
                <li>Se cubren las pérdidas y averías de las mercancías transportadas a causa de choque, vuelco, desbarrancamiento o descarrilamiento del vehículo transportador, derrumbe, caída de árboles o postes, incendio, explosión, rayo, huracán, ciclón, tornado, inundación, aluvión y alud.</li>
            </ul>
            <h3>Robo</h3>
            <ul>
                <li>Daños en operaciones de carga y descarga</li>
                <li>Rotura de parabrisas</li>
            </ul>
            <h2>SEGURO TECNICO</h2>
            <p>Protegé tus equipos electrónicos, maquinarias, equipos médicos o trabajos de construcción y montaje con el respaldo de la aseguradora número uno en situación financiera. Comunicate con nuestros productores para conocer los detalles de cada cobertura.</p>
            <h3>EQUIPOS ELECTRÓNICOS</h3>
            <ul>
                <li>Se cubren los daños materiales directos sufridos por los equipos electrónicos asegurados por cualquier causa accidental súbita e imprevista, que no haya sido excluida expresamente y mientras se encuentren en el domicilio de riesgo declarado.</li>
                <li>Daños materiales directos.</li>
                <li>Daños por falla en la red eléctrica pública.</li>
                <li>Incendio.</li>
                <li>Accidente.</li>
                <li>Robo (excluye hurto).</li>
            </ul>
            <h3>EQUIPOS CONTRATISTAS / AGRÍCOLAS</h3>
            <ul>
                <li>Se cubre la maquinaria y equipos a partir del momento en que se encuentre efectuando su función específica incluyendo su eventual traslado desde o hacia el lugar de trabajo, depósito u obrador en el ámbito de la República Argentina, como consecuencia de</li>
                <li>Incendio</li>
                <li>Accidente</li>
                <li>Robo</li>
                <li>Hurto</li>
            </ul>
        `,
        customClass: {
            popup: 'left-aligned'
        },
        width: '80%',
        padding: '2em',
    });
}

function mostrarInformacionVehiculos() {
    Swal.fire({
        title: 'SEGURO AUTOMOTOR',
        html: `
            <p>El mejor seguro con la mejor compañía: Nuestros clientes nos respaldan, somos la compañía con más vehículos asegurados en Argentina. Desde hace más de 100 años, brindamos una cobertura para cada tipo de necesidad. El mejor respaldo para tu auto está acá.</p>
            <h3>TODO RIESGO</h3>
            <ul>
                <li>Opción todo riesgo con franquicia fija, franquicias constantes por suma asegurada o sin franquicia.</li>
                <li>Responsabilidad Civil</li>
                <li>Pérdida total y parcial por Robo</li>
                <li>Pérdida total y parcial por Incendio</li>
                <li>Destrucción total.</li>
                <li>Daños parciales.</li>
                <li>Grabado de Cristales</li>
                <li>Accidentes Personales</li>
                <li>Asistencia Penal</li>
                <li>Bonificación por Buen Resultado</li>
                <li>Servicio de Gestoría</li>
                <li>Descuentos por Alarma y sistemas de rastreo</li>
                <li>Reposición de O Km por robo total (según condiciones contractuales).</li>
                <li>Rotura de Cristales, Cerraduras y Antena.</li>
                <li>Indemnización de cubiertas sin desgaste, crique y llave de ruedas</li>
                <li>Auto sustituto (por diez días ante robo total)</li>
                <li>Daños parciales a consecuencia de la caída de Granizo de hasta el 30 % de la suma asegurada sin la inclusión de la clausula de ajuste automático. Este beneficio NO TENDRA LIMITES si la reparación fuera realizada por FEDERACION PATRONAL SEGUROS S.A.U. y/o prestador que esta aseguradora designe.</li>
            </ul>
            <h3>C FULL - TERCEROS COMPLETO</h3>
            <ul>
                <li>Responsabilidad Civil.</li>
                <li>Pérdida total y parcial por Robo.</li>
                <li>Pérdida total y parcial por Incendio.</li>
                <li>Destrucción total por Accidente.</li>
                <li>Grabado de Cristales.</li>
                <li>Accidentes Personales.</li>
                <li>Asistencia Penal.</li>
                <li>Bonificación por Buen Resultado.</li>
                <li>Servicio de Gestoría.</li>
                <li>Descuentos por Alarma y sistemas de rastreo.</li>
                <li>Reposición de O Km por robo total (según condiciones contractuales).</li>
                <li>Rotura de Cristales, Cerraduras y Antena. Este beneficio NO TENDRA LIMITES si la reparación fuera realizada por FEDERACION PATRONAL SEGUROS S.A. y/o prestador que esta aseguradora designe.</li>
                <li>Cobertura de Granizo.</li>
                <li>Daños parciales a consecuencia de la caída de Granizo de hasta el 30 % de la suma asegurada sin la inclusión de la clausula de ajuste automatico con un limite máximo de $ 70.000 por evento . Este beneficio NO TENDRA LIMITES si la reparación fuera realizada por FEDERACION PATRONAL SEGUROS S.A. y/o prestador que esta aseguradora designe.</li>
            </ul>
            <h3>COBERTURA TERCEROS COMPLETO</h3>
            <ul>
                <li>Responsabilidad Civil.</li>
                <li>Pérdida total y parcial por Robo.</li>
                <li>Pérdida total y parcial por Incendio.</li>
                <li>Destrucción total por Accidente.</li>
                <li>Grabado de Cristales.</li>
                <li>Accidentes Personales.</li>
                <li>Asistencia Penal.</li>
                <li>Bonificación por Buen Resultado.</li>
            </ul>
            <h3>COBERTURA TERCEROS BASE</h3>
            <ul>
                <li>Responsabilidad Civil.</li>
                <li>Pérdida total por Robo.</li>
                <li>Pérdida total por Incendio.</li>
                <li>Destrucción total por Accidente.</li>
                <li>Accidentes Personales.</li>
                <li>Asistencia Penal.</li>
                <li>Bonificación por Buen Resultado.</li>
            </ul>
            <h3>RESPONSABILIDAD CIVIL</h3>
            <ul>
                <li>Responsabilidad civil voluntaria según SSN</li>
                <li>Accidentes Personales</li>
                <li>Asistencia Penal</li>
                <li>Bonificación por Buen Resultado</li>
            </ul>
            <h3>SEGURO AUTOS CLASICOS</h3>
            <p>Un producto desarrollado para coleccionistas y restauradores de autos clásicos, antiguos o fanáticos de los Hot Rod. Pensamos en las mejores coberturas para este interesante hobby.</p>
            <h3>RIESGOS CUBIERTOS</h3>
            <ul>
                <li>Responsabilidad Civil hacia terceros transportados y no transportados hasta un límite de responsabilidad civil voluntaria según SSN.</li>
                <li>Robo total.</li>
                <li>Incendio total.</li>
                <li>Destrucción Total.</li>
                <li>Servicio de grúa hasta 150 km lineales o 300 km totales (ida y vuelta).</li>
            </ul>
            <h3>SEGURO MOTOS</h3>
            <p>Ahora, con la cobertura Integral para motovehículos, estas mejor protegido. Podes contar con un seguro que cubre todos los riesgos a los cuales estas expuesto como motociclista.</p>
            <h3>SEGURO INTEGRAL MOTOVEHICULOS</h3>
            <ul>
                <li>Responsabilidad Civil hacia terceros transportados y no transportados y daños a cosas de terceros.</li>
                <li>Robo Total.</li>
                <li>Incendio Total.</li>
                <li>Destrucción Total.</li>
                <li>Extensión de coberturas a países limítrofes.</li>
                <li>Servicio de Grúa.</li>
                <li>Seguro de Accidentes Personales, que protege tu integridad física y el patrimonio de tu grupo familiar</li>
                <li>Seguro de Salud que ampara las posibles caídas y lesiones que puedan provocar la fractura de huesos o la necesidad de utilizar órtesis o prótesis.</li>
            </ul>
            <h3>SEGURO MONOPATÍN</h3>
            <p>Vos cuidas el planeta, nosotros te cuidamos a vos y a tu monopatín. Ecomovilidad es moverse sin dañar el medio ambiente. Movete tranquilo con una cobertura integral, combinando seguros responsabilidad civil, robo, accidentes personales y salud.</p>
            <h3>COBERTURAS PRINCIPALES:</h3>
            <ul>
                <li>BICICLETAS ALTA-MEDIA GAMA</li>
                <li>BICICLETAS ELECTRICAS</li>
                <li>MONOPATINES ELECTRICOS</li>
                <li>MOTOS ELECTRICAS QUE NO PUEDEN PATENTARSE</li>
                <li>PATINETAS Y SIMILARES</li>
                <li>PAR DE ESQUIES-PAR DE PALOS</li>
                <li>TABLA DE SNOWBOARD</li>
                <li>PAR DE ROLLERS</li>
                <li>TABLA DE SURF</li>
            </ul>
            <h3>COBERTURAS PRINCIPALES:</h3>
            <ul>
                <li>Responsabilidad Civil por hechos imputables al Asegurado a consecuencia del uso de vehículos ecológicos, con exclusión de todo tipo de vehículo motorizado. Opcional Grupo Familiar (cónyuge e hijos). Ámbito de Cobertura: República Argentina. SIN FRANQUICIA.</li>
                <li>Salud Ecomovilidad: Ofrece tres alternativas de planes de coberturas indemnizatorias e independientes y complementarios entre sí. Los planes son: Salud Fracturas, Salud Intervenciones y Salud Prótesis.</li>
                <li>Accidentes Personales Ecomovilidad: Cuenta con tres opciones de suma asegurada. Incluye coberturas de muerte accidental, invalidez y asistencia médico farmacéutica.</li>
                <li>Robo Total</li>
            </ul>
            <h3>SEGURO BICICLETAS</h3>
            <p>Disfrutá al máximo tu pasión por el ciclismo con tranquilidad: descubrí nuestro Seguro Integral para Ciclistas.</p>
            <h3>COBERTURAS PRINCIPALES</h3>
            <ul>
                <li>Cobertura de robo en Argentina y Países Limítrofes: Cubre el robo total o parcial de la bicicleta en todo el territorio nacional y países limítrofes (con posibilidad de cubrir el mundo entero)</li>
                <li>Todo Riesgo con Franquicia: Opcionalmente, es posible ampliar la cobertura a daños propios por accidente, incendio o rayo.</li>
                <li>Accesorios fijos: Protegé también los accesorios fijos de la bicicleta como el ciclocomputador, el GPS o el velocímetro.</li>
            </ul>
            <h3>Complementá tu seguro con una cobertura para vos:</h3>
            <ul>
                <li>Accidentes Personales: Brinda asistencia médica y farmacéutica en caso de accidentes, con tres opciones de suma asegurada para que elijas la que mejor se ajusta a tus necesidades.</li>
                <li>Salud: Cobertura indemnizatoria para fracturas como consecuencia de un accidente.</li>
                <li>Responsabilidad Civil: Te protege ante daños a terceros ocasionados por el uso de tu bicicleta, sin franquicia y en toda Argentina.</li>
            </ul>
            <h3>FOOD TRUCK</h3>
            <p>Ponemos a tu disposición una cobertura integral para aquellos negocios dedicados a la gastronomía en camiones o trailers adaptados como locales comerciales para la venta de comidas, bebidas, helados, etc. Desarrollamos un conjunto de coberturas pensadas específicamente para cubrir todas tus necesidades.</p>
            <h3>COBERTURA AUTOMOTOR</h3>
            <ul>
                <li>Responsabilidad Civil para los vehículos mientras circulan, con diferentes valores dependiendo el tipo de vehículo.</li>
                <li>Cobertura de Robo e incendio de la unidad y de sus equipamiento.</li>
            </ul>
            <h3>COBERTURA INTEGRAL DE COMERCIO</h3>
            <ul>
                <li>Incendio de Contenido general</li>
                <li>Robo de Contenido General</li>
                <li>Responsabilidad Civil Comprensiva</li>
                <li>Valores en Caja</li>
                <li>Cristales</li>
                <li>Equipos electrónicos – Todo Riesgo</li>
            </ul>
            <h3>COBERTURA DE RESPONSABILIDAD CIVIL</h3>
            <ul>
                <li>Responsabilidad Civil emergente del suministro de productos alimenticios y/o bebidas. Se cubre los daños que dichos productos pudieran causar a sus consumidores o usuarios.</li>
            </ul>
        `,
        customClass: {
            popup: 'left-aligned'
        },
        width: '80%',
        padding: '2em',
    });
}

function mostrarInformacionPersonas() {
    Swal.fire({
        title: 'ACCIDENTES PERSONALES',
        html: `
            <p>El seguro de Accidentes Personales brinda protección al asegurado en caso de muerte o incapacidades permanentes sean totales o parciales, sufridas en ocasión de un accidente.</p>
            <h3>AP PRESTACIONAL</h3>
            <p>Destinado a personas que por su ocupación o profesión independiente realizan actividades laborales de forma autónoma. También pueden contratar estas pólizas aquellas personas que tengan personal a su cargo en forma transitoria. Cubre a los asegurados durante la actividad laboral y el trayecto in itinere (Se encuentra incluido el uso de moto durante el trayecto in itinere).</p>
            <ul>
                <li>Muerte accidental</li>
                <li>Invalidez total y/o parcial permanente</li>
                <li>Asistencia médica, farmacéutica, ortopedia prestacional</li>
                <li>Renta diaria por internación</li>
                <li>Reintegro de gastos de sepelio</li>
            </ul>
            <h3>AUTONOMO 24HS</h3>
            <p>Es un seguro destinado a personas que por su ocupación o profesión independiente realizan actividades laborales de forma autónoma con protección durante las 24Hs.</p>
            <ul>
                <li>Muerte accidental</li>
                <li>Invalidez total y/o parcial permanente</li>
                <li>Renta diaria por invalidez temporaria</li>
                <li>Reintegro de gastos médicos</li>
            </ul>
            <h3>AP TURISMO ESTUDIANTIL</h3>
            <p>Turismo Estudiantil es un producto especialmente diseñado para cubrir a las Agencias de Viajes, por los accidentes que sufran los pasajeros de viajes de fin de estudios. Turismo Alternativo es un producto que cubre a los operadores turísticos por los accidentes que sufran los turistas durante la realización de las excursiones organizadas por ellos.</p>
            <ul>
                <li>Muerte accidental</li>
                <li>Invalidez total y/o parcial permanente</li>
                <li>Reintegro de gastos médicos</li>
            </ul>
            <h3>AP DEPORTIVO</h3>
            <p>Un seguro diseñado para cubrir a Clubes, Asociaciones de Fomento, Escuelas Deportivas, etc. por los accidentes que sufran las personas que practican deportes amateur dentro de sus establecimientos.</p>
            <ul>
                <li>Muerte accidental</li>
                <li>Invalidez total y/o parcial permanente</li>
                <li>Reintegro de gastos médicos</li>
            </ul>
            <h2>SALUD</h2>
            <p>Contá con la ayuda económica para solventar el tratamiento de una enfermedad grave, lesión o intervención quirúrgica que se pueda presentar. Te damos la posibilidad de elegir la cobertura de salud que más se ajusta a tus necesidades y a tu presupuesto, contando además con un servicio de asistencia médica de urgencias y emergencias. Comunícate con nuestros productores y comenzá a disfrutar de la tranquilidad de estar respaldado por la aseguradora número uno en situación financiera del país.</p>
            <h3>SALUD PERSONAL</h3>
            <p>Protección completa y adaptable a la necesidad de cada persona. Se puede elegir libremente una, varias o todas las coberturas gracias a la flexibilidad de este producto.</p>
            <ul>
                <li>Diagnóstico por enfermedades.</li>
                <li>Intervenciones Quirurgicas.</li>
                <li>Trasplantes.</li>
                <li>Renta diaria por Internación.</li>
                <li>Renta mensual por Cuidados prolongados.</li>
            </ul>
            <p>Además cuenta con el servicio prestacional para Urgencias y Emergencias médicas:</p>
            <ul>
                <li>Atención medica telefónica las 24 hs.</li>
                <li>Servicio de traslados.</li>
                <li>Segunda opinión médica.</li>
                <li>Asistencia a la tercera edad.</li>
                <li>Asistencia por urgencias odontológicas.</li>
                <li>Asistencia en viajes.</li>
                <li>Descuento en farmacias de medicamentos recetados.</li>
            </ul>
            <h3>SALUD SENIOR</h3>
            <p>Protección específica para la población de adultos mayores y sus necesidades personales.</p>
            <ul>
                <li>Renta Mensual por Necesidad de Cuidados Prolongados</li>
                <li>Gran Trauma (Politraumatismo que requiera internación prolongada)</li>
                <li>Fractura de Huesos por accidente</li>
                <li>Implantación de Prótesis Oftalmológicas, Auditivas y Ortopédicas</li>
                <li>Implantación de Órtesis y Ortopedia</li>
            </ul>
            <h2>RETIRO</h2>
            <p>El Seguro de Retiro es la opción ideal para aquellas personas que buscan complementar su futura jubilación con un ingreso adicional que les permita vivir mejor a la edad de su retiro.</p>
            <p>Se trata de un producto diferencial y financieramente accesible, que cuenta con cinco planes que se adaptan a las necesidades de cada asegurado, dos de los cuales cuentan con la posibilidad de contratar la cobertura de Vida, adicionalmente al ahorro.</p>
            <p>Visitá: <a href="https://www.fedpat.com.ar/seguro-de-retiro/" target="_blank">https://www.fedpat.com.ar/seguro-de-retiro/</a></p>
            <h2>VIDA INDIVIDUAL</h2>
            <p>Brinda una protección para sus seres queridos ante una pérdida repentina del sustento familiar, como así también mitigar los efectos producidos ante una invalidez y/u otras enfermedades. Pensado para brindar una protección esencial a la medida de cada necesidad, pudiéndose elegir la moneda y la forma de actualización del capital asegurado. También se puede optar por tres planes de cobertura.</p>
            <h2>ROBO DE IDENTIDAD</h2>
            <p>Te ofrecemos cobertura contra Robo de identidad, orientada al reintegro de los gastos incurridos para revertir la situación de sustracción de la identidad, con el fin de limitar los eventuales perjuicios económicos. Podes elegir entre una amplia variedad de coberturas, que van desde la pérdida económica directa hasta los honorarios profesionales por demandas, juicios, mediaciones, etc.</p>
            <h3>PROTECCIÓN DE IDENTIDAD CLÁSICA</h3>
            <p>Cubre el reintegro de los importes afectados a consecuencia del robo de identidad, amparando también los gastos legales y todos los gastos razonables en que incurra el asegurado a fin de recuperar su identidad.</p>
            <ul>
                <li>Pérdida Económica Directa</li>
                <li>Gastos Legales</li>
                <li>Otros Gastos</li>
            </ul>
            <h2>RESPONSABILIDAD CIVIL PROFESIONAL</h2>
            <p>Asegurá tu patrimonio con el seguro de Responsablidad Civil Profesional, frente a reclamos de terceros que se deriven de la realización de tu actividad profesional.</p>
            <h3>PROFESIONALES DE LA SALUD</h3>
            <p>Pueden ampararse todas las especialidades médicas de profesionales que cuenten con el título profesional y matriculación correspondiente, como así también técnicos y auxiliares de la medicina (técnicos radiólogos, enfermeros, instrumentistas, técnicos ópticos y otros técnicos y auxiliares de la Salud.)</p>
            <h3>OTRAS PROFESIONES</h3>
            <p>Pueden cubrirse otras profesiones siempre y cuando sea de carácter universitario y/o esté sujeto a una regulación legal, como, por ejemplo: martillero, corredor inmobiliario, docente, agrimensor, maestro mayor de obras, técnico, despachante de aduana, asistente/trabajador social, licenciado en seguridad e higiene, etc.</p>
        `,
        customClass: {
            popup: 'left-aligned'
        },
        width: '80%',
        padding: '2em',
    });
}


function mostrarInformacionContacto() {
    Swal.fire({
        title: 'Contacto',
        html: `
            <p>Lic. Marcos Javier Brassini</p>
            <p>1º de Mayo 1513 - Casilda - Santa Fe</p>
            <p>Cel. (03464) 15528114</p>
            <p><a href="https://www.facebook.com/Estudio-Brassini-339645166678459/" target="_blank">facebook.com/estudiobrassini</a></p>
            <p><a href="https://www.instagram.com/estudiobrassini/" target="_blank">instagram.com/estudiobrassini</a></p>
            <p>Whatsapp: 3464528114</p>
            <p><a href="mailto:estudiobrassini@hotmail.com">estudiobrassini@hotmail.com</a></p>
        `,
        customClass: {
            popup: 'left-aligned'
        },
        width: '80%',
        padding: '2em',
    });
}

function cerrarModal() {
    var modals = document.getElementsByClassName("modal");
    for (var i = 0; i < modals.length; i++) {
        modals[i].style.display = "none";
    }
}