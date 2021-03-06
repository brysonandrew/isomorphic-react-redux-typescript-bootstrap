import * as React from 'react';
import { fontSize } from "../../../../data/helpers/breakPoints";

interface IProps {
    isMobile: boolean
    isTablet: boolean
    isLaptop: boolean
}

interface IState {}

export class WorldHeading extends React.Component<IProps, IState> {

    public constructor(props?: any, context?: any) {
        super(props, context);
    }

    render(): JSX.Element {
        const { isMobile, isTablet, isLaptop } = this.props;

        const styles = {
            worldHeading: {
                fontSize: fontSize.XXL(isMobile, isTablet, isLaptop)
            }
        } as any;
        return (
            <div style={ styles.worldHeading }>
                <pre>{`W O R L D`}</pre>
            </div>
        );
    }
}
