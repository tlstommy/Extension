import React from 'react';

export class MessageBody extends React.PureComponent<MessageBody.Props> {
	return = {};

	render() {
		return (
			this.props.parts.map((part, i) => {
				return React.cloneElement(part, {
					...part.props,
					key: `msg-part-${i}`
				});
			})
		);
	}

	componentWillUnmount() {
		console.log('Component WILL unmount.');
	}
}

export namespace MessageBody {
	export interface Props {
		parts: JSX.Element[];
	}
}