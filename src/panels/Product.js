import './Persik.css';
import React from 'react';
import PropTypes from 'prop-types';
import { IOS, Placeholder, platform } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import { useParams, useRouter } from '@happysanta/router';
import Button from '@vkontakte/vkui/dist/components/Button/Button';

const osName = platform();

const Product = props => {
	const router = useRouter();
	const { id } = useParams();
	return <Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={() => router.popPage()}>
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Product
		</PanelHeader>
		<Placeholder>
			product id #{id}
		</Placeholder>
		<br/>
		<Button size="xl" level="2" mode="secondary" onClick={() => router.popPage()}>
			Назад
		</Button>
	</Panel>;
};

Product.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Product;
