// @flow
import React, {useRef} from 'react';
import {PageContainer, PageTitle} from '../../components/shared/styled-components';
import {Block} from 'baseui/block';
import {MockResources} from './util';
import {Header, Link, StyledArrowUp} from './styled-components';

export const Resources = (props) => {
    const topOfPageRef = useRef(null);
    const scrollToTop = () => topOfPageRef && topOfPageRef.current && topOfPageRef.current.scrollIntoView();

    return  (
    <PageContainer>
        <PageTitle ref={topOfPageRef}>Resources</PageTitle>
        <Block display="flex" flexDirection="column" marginBottom="scale300">
            {MockResources.map(({header, id}) => {
                return <Block marginBottom="scale200"><Link $inline href={`#${id}`}>{header}</Link></Block>
            })}
        </Block>
        {MockResources.map(({header, links, id}) => {
            return <Block display="flex" flexDirection="column">
                <Block marginBottom="scale300">
                    <Block display="flex" alignItems="center">
                        <Block marginRight="scale200">
                            <Header id={id}>{header}</Header>
                        </Block>
                        <div onClick={scrollToTop}>
                            <StyledArrowUp size={30}/>
                        </div>
                    </Block>
                    {links.map((link, index) => {
                        return <Block key={`id-${index}`} marginBottom="scale200"><Link href="https://www.moishehouse.org" target="_blank">{link}</Link></Block>
                    })}
                </Block>
            </Block>
        })}
    </PageContainer>
    )
}

export default Resources;