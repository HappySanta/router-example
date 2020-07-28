import React, {Component, useRef, useState} from "react";
import {
	Button,
	CellButton,
	Div,
	FixedLayout,
	FormLayout,
	Group,
	Input,
	ModalPage,
	ModalPageHeader,
	Panel,
	PanelHeader,
	PanelHeaderBack,
	PanelHeaderButton,
	PanelHeaderClose,
	Placeholder,
	RichCell
} from "@vkontakte/vkui";
import Icon56MessageReadOutline from "@vkontakte/icons/dist/56/check_circle_device_outline"
import {popPage, pushModal, pushPage, pushPageAfterPreviews, pushPopup, replacePage} from "@happysanta/router"
import {PAGE_MAIN} from "@happysanta/router"
import {useHomePageCheck, useRoute} from "@happysanta/router"
import HomeIcon from "@vkontakte/icons/dist/28/home_outline"
import Icon24Cancel from "@vkontakte/icons/dist/24/cancel"
import {
	MODAL_PRODUCT_INFO,
	PAGE_CREATE_DONE,
	PAGE_CREATE_FORM,
	PAGE_CREATE_START,
	PAGE_MATCH,
	PAGE_PRODUCT,
	PAGE_SET_OF_PRODUCT, PAGE_TEAM, POPOUT_ALERT
} from "./routes";

export interface PanelProps {
	id: string
}

export interface ModalProps {
	id: string
	onClose: () => void
}


export function PanelMain({id}: PanelProps) {
	return <Panel id={id}>
		<PanelHeader>Главная страница</PanelHeader>
		<Group>
			<RichCell onClick={() => pushPage(PAGE_PRODUCT, {id: "10", name: "iPhone"})} after="77 500 ₽">iPhone
				XS</RichCell>
			<RichCell onClick={() => pushPage(PAGE_PRODUCT, {id: "11", name: "Xiaomi"})} after="22 000 ₽">Xiaomi
				R2</RichCell>
			<RichCell onClick={() => pushPage(PAGE_PRODUCT, {id: "12", name: "Samsung"})} after="12 500 ₽">Samsung
				Galaxy S3</RichCell>
			<RichCell onClick={() => pushPage(PAGE_PRODUCT, {id: "13", name: "Honor"})} after="32 000 ₽">Honor
				R2</RichCell>
			<RichCell onClick={() => pushPage(PAGE_PRODUCT, {id: "14", name: "Sony"})} after="17 999 ₽">Sony Xperia
				Z7</RichCell>

			<RichCell onClick={() => pushPage(PAGE_SET_OF_PRODUCT, {id: "22"})} after="99 999 ₽">
				Купить сразу все
			</RichCell>


			<RichCell onClick={() => pushPage(PAGE_MATCH, {id: "MRG-YNX"})}>
				Посмотреть матч
			</RichCell>
		</Group>
	</Panel>
}

export function PanelProduct({id}: PanelProps) {
	const params = useRef<{ id: string, name: string }>(useRoute().getParams() as { id: string, name: string });
	const isHomePage = useRef<boolean>(useHomePageCheck());
	return <Panel id={id}>
		<PanelHeader left={isHomePage.current ?
			<PanelHeaderButton onClick={() => replacePage(PAGE_MAIN)}><HomeIcon/></PanelHeaderButton>
			: <PanelHeaderBack onClick={() => popPage()}/>}>
			{params.current.name}
		</PanelHeader>
		<Div>
			Мы продаем {params.current.name} отличного качества, только у нас вы можете купить {params.current.name} по
			самой выгодной цене
		</Div>
		<Div>
			Чтобы купить {params.current.name} нажмите кнопку "Офомить заказ" и укажите id {params.current.id}
		</Div>
		<CellButton onClick={() => pushModal(MODAL_PRODUCT_INFO)}>Подробнее</CellButton>
		<FixedLayout vertical="bottom">
			<Div>
				<Button mode="primary" onClick={() => pushPage(PAGE_CREATE_START)} size="xl">Офомить заказ</Button>
				<br/>
				<Button mode="secondary" onClick={() => pushPage(PAGE_SET_OF_PRODUCT, {id: "22"})} size="xl">Купить
					все</Button>
			</Div>
		</FixedLayout>
	</Panel>
}

export class PanelProductSet extends Component<{ id: string }> {
	render() {
		return <Panel id={this.props.id}>
			<PanelHeader left={<PanelHeaderBack onClick={() => popPage()}/>}>
				Набор товаров
			</PanelHeader>
			<Div>
				Чтобы купить сразу все товары нажмите кнопку внизу!
			</Div>
			<FixedLayout vertical="bottom">
				<Div>
					<Button onClick={() => pushPage(PAGE_CREATE_START)} size="xl">Поехали!</Button>
				</Div>
			</FixedLayout>
		</Panel>
	}
}


export function PanelCreateStart({id}: PanelProps) {
	return <Panel id={id}>
		<PanelHeader left={<PanelHeaderClose onClick={() => popPage()}/>}>
			Заказ
		</PanelHeader>
		<Div>
			Сейчас мы будем оформлять заказ, вам нонадобиться id товара и адрес доставки
		</Div>
		<FixedLayout vertical="bottom">
			<Div>
				<Button onClick={() => pushPage(PAGE_CREATE_FORM)} size="xl">Далее</Button>
			</Div>
		</FixedLayout>
	</Panel>
}

export function PanelCreateForm({id}: PanelProps) {
	return <Panel id={id}>
		<PanelHeader left={<PanelHeaderBack onClick={() => popPage()}/>}>Заказ</PanelHeader>
		<FormLayout>
			<Input top="id товара"/>
			<Input top="Адресс доставки"/>
		</FormLayout>
		<FixedLayout vertical="bottom">
			<Div>
				<Button onClick={() => pushPageAfterPreviews(PAGE_CREATE_START, PAGE_CREATE_DONE)}
						size="xl">Создать</Button>
			</Div>
		</FixedLayout>
	</Panel>
}


export function PanelCreateDone({id}: PanelProps) {
	return <Panel id={id}>
		<Placeholder
			icon={<Icon56MessageReadOutline/>}
			action={<Button onClick={() => popPage()} size="l" mode="tertiary">В начало</Button>}
			stretched>
			Все готово! Заказ создан!
		</Placeholder>
	</Panel>
}

export function PanelMatch({id}: PanelProps) {
	const [match] = useState<{ id: string}>(useRoute().getParams() as { id: string});
	const leftTeam = match.id.split('-')[0];
	const rightTeam = match.id.split('-')[1];
	return <Panel id={id}>
		<PanelHeader left={<PanelHeaderBack onClick={() => popPage()}/>}>Матч</PanelHeader>
		<Div>
			Вы смотрите матч {match.id}
		</Div>
		<CellButton onClick={() => pushPage(PAGE_TEAM, {id:leftTeam})}>Команда {leftTeam}</CellButton>
		<CellButton onClick={() => pushPage(PAGE_TEAM, {id:rightTeam})}>Команда {rightTeam}</CellButton>
		<br/>
		<CellButton onClick={() => pushPage(PAGE_MATCH, {id:"GOOGLE-YAHOO"})}>Матч GOOGLE-YAHOO</CellButton>
		<CellButton onClick={() => pushPage(PAGE_MATCH, {id:"UBER-LYFT"})}>Матч UBER-LYFT</CellButton>
		<CellButton onClick={() => pushPage(PAGE_MATCH, {id:"FORD-BMW"})}>Матч FORD-BMW</CellButton>
	</Panel>
}

export function PanelTeam({id}: PanelProps) {
	const [team] = useState<{ id: string}>(useRoute().getParams() as { id: string});
	return <Panel id={id}>
		<PanelHeader left={<PanelHeaderBack onClick={() => popPage()}/>}>Команда</PanelHeader>
		<Div>
			{team.id} -- лучшая команда!
		</Div>
		<CellButton onClick={() => pushPage(PAGE_TEAM, {id:"BLACK"})}>Команда BLACK</CellButton>
		<CellButton onClick={() => pushPage(PAGE_TEAM, {id:"GREEN"})}>Команда GREEN</CellButton>
		<CellButton onClick={() => pushPage(PAGE_TEAM, {id:"YELLOW"})}>Команда YELLOW</CellButton>
		<CellButton onClick={() => pushPage(PAGE_TEAM, {id:"PINK"})}>Команда PINK</CellButton>

		<CellButton onClick={() => replacePage(PAGE_TEAM, {id:"DARK-BLUE"})}>Команда DARK-BLUE replace</CellButton>
		<br/>
		<CellButton onClick={() => pushPage(PAGE_MATCH, {id:"PINK-RED"})}>Матч PINK-RED</CellButton>
		<CellButton onClick={() => pushPage(PAGE_MATCH, {id:"YELLOW-BLUE"})}>Матч YELLOW-BLUE</CellButton>
		<CellButton onClick={() => pushPage(PAGE_MATCH, {id:"BLACK-WHITE"})}>Матч BLACK-WHITE</CellButton>
	</Panel>
}


export function ModalProductInfo({id, onClose}: ModalProps) {
	return <ModalPage id={id}
					  header={<ModalPageHeader left={<PanelHeaderButton onClick={onClose}><Icon24Cancel /></PanelHeaderButton>}>Подробнее</ModalPageHeader>}
					  onClose={onClose}>
		<Div>
			Подробнее о товаре<br/>
			<Button onClick={() => pushPopup(POPOUT_ALERT)}>Удалить товар</Button>
			<br/>
			Тут должен быть какой-то текст и всякое такое бла бла бла<br/>
			Тут должен быть какой-то текст и всякое такое бла бла бла<br/>
			Тут должен быть какой-то текст и всякое такое бла бла бла<br/>
			Тут должен быть какой-то текст и всякое такое бла бла бла<br/>
			Тут должен быть какой-то текст и всякое такое бла бла бла<br/>
			Тут должен быть какой-то текст и всякое такое бла бла бла<br/>
			Тут должен быть какой-то текст и всякое такое бла бла бла<br/>
		</Div>
	</ModalPage>
}
