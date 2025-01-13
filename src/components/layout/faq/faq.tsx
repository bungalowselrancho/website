//* Types
import { AccordionProps } from '@/types';

//* Components
import { RevealFade } from '@/components/layout';
import { Title, Text, Button } from '@/components/ui';
import { Accordion } from '@/components';

//* Styles
import styles from './styles.module.css';

const faqs: AccordionProps[] = [
	{
		question: '¿Cómo puedo realizar una reserva?',
		answer: (
			<Text
				variant={'pLeft'}
				font={'Lato'}
				color={'primary975'}
				partOf={'AccordionAnswer'}
			>
				Si usted solicitó las <b>tarifas vigentes</b> y quiere concretar
				una reserva, puede comunicarse con nosotros aclarando{' '}
				<b>fechas solicitadas</b>, <b>unidad</b> y{' '}
				<b>cantidad de pasajeros</b>.<br />
				Otra opción disponible es realizar la reserva a través de{' '}
				<b>
					<a
						style={{
							textDecoration: 'underline var(--primary-975)',
						}}
						href="https://www.alquilerargentina.com/alojamientos/qc35-Bungalow-Bungalows-El-Rancho-San-Jos%C3%A9.html"
						target="_blank"
						rel="noopener noreferrer"
					>
						Alquiler Argentina
					</a>
				</b>
				.
			</Text>
		),
	},
	{
		question: '¿Cuáles son las condiciones para realizar una reserva?',
		answer: (
			<Text
				variant={'pLeft'}
				font={'Lato'}
				color={'primary975'}
				partOf={'AccordionAnswer'}
			>
				• <b>Pago anticipado</b> del <b>30%</b> en concepto de seña. El
				saldo restante se abona al ingresar.
				<br />• Estadía mínima fuera de temporada: <b>2 noches</b>.
				<br />• Estadía mínima en temporada alta: <b>3 noches</b>{' '}
				(vacaciones verano e invierno).
				<br />• Feriados largos: <b>paquetes promocionales</b>.
				<br />• <b>Antelación mínima</b> para reservar de <b>1 día</b>.
			</Text>
		),
	},
	{
		question: '¿Cuáles son las normas del alojamiento?',
		answer: (
			<Text
				variant={'pLeft'}
				font={'Lato'}
				color={'primary975'}
				partOf={'AccordionAnswer'}
			>
				• Apto para bebés (0 a 2 años), niños (2 a 12 años) y personas
				con movilidad reducida.
				<br />• <b>Aceptamos</b>: familias, parejas y grupos de jóvenes.
				<br />• <b>No aceptamos</b>: mascotas, fumar en el interior del
				alojamiento, realizar fiestas, recibir visitas y colocar música
				alta.
			</Text>
		),
	},
	{
		question: '¿Cuáles son los horarios de check-in y check-out?',
		answer: (
			<Text
				variant={'pLeft'}
				font={'Lato'}
				color={'primary975'}
				partOf={'AccordionAnswer'}
			>
				• <b>check-in</b> a partir de las 12:00 m.
				<br />• <b>check-out</b> hasta las 10:00 a. m.
			</Text>
		),
	},
	{
		question: '¿Cuál es su política de cancelación?',
		answer: (
			<Text
				variant={'pLeft'}
				font={'Lato'}
				color={'primary975'}
				partOf={'AccordionAnswer'}
			>
				Brindamos <b>cancelación flexible</b> con{' '}
				<b>seña reutilizable</b>.<br />
				Ante la cancelación del huésped, el importe abonado en concepto
				de seña se asignará como crédito en pesos para utilizar en una
				futura reserva.
				<br />
				La misma deberá realizarse dentro de los siguientes{' '}
				<b>12 meses</b> y estará sujeta a disponibilidad.
			</Text>
		),
	},
	{
		question: '¿Con qué métodos de pago cuentan?',
		answer: (
			<Text
				variant={'pLeft'}
				font={'Lato'}
				color={'primary975'}
				partOf={'AccordionAnswer'}
			>
				• Efectivo.
				<br />
				• Transferencia bancaria.
				<br />
				• Tarjeta de crédito o débito.
				<br />
			</Text>
		),
	},
	{
		question: '¿Con qué promociones cuentan?',
		answer: (
			<Text
				variant={'pLeft'}
				font={'Lato'}
				color={'primary975'}
				partOf={'AccordionAnswer'}
			>
				• Descuento del <b>20%</b> en termas San José.
				<br />• Descuentos en varios comercios adheridos a{' '}
				<b>PRESTURI</b>.
				<br />
			</Text>
		),
	},
];

export default function FreqAskedQuestions() {
	return (
		<>
			<RevealFade>
				<div
					className={`${styles.flexCenter} ${styles.titleContainer}`}
				>
					<Title variant={'h2'} font={'Arvo'} color={'primary975'}>
						Preguntas frecuentes
					</Title>
				</div>
				<div className={` ${styles.faqContainer}`}>
					{faqs.map((faq, i) => (
						<Accordion key={i} {...faq} />
					))}
				</div>
				<div
					className={`${styles.flexCenter} ${styles.subtitleContainer}`}
				>
					<Title variant={'h4'} font={'Arvo'} color={'primary975'}>
						¿Todavía tiene preguntas?
					</Title>
					<Title variant={'h4'} font={'Arvo'} color={'primary975'}>
						¡Contáctenos!
					</Title>
				</div>
				<div className={styles.textContainer}>
					<Text
						variant={'pCenter'}
						font={'Lato'}
						color={'primary975'}
					>
						Su consulta no molesta.
					</Text>
				</div>
				<div
					className={`${styles.flexCenter} ${styles.buttonContainer}`}
				>
					<a
						href="https://wa.me/543447644360"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button variant="secondary" size={'big'}>
							Contactar ahora
						</Button>
					</a>
				</div>
			</RevealFade>
		</>
	);
}
