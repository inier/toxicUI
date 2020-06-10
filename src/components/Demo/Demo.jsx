import React from 'react';
import { CardLite, WhiteSpace, WingBlank } from '@/components';

import './pageView.scss';

export const DemoShow = ({ className = '', style, children }) => (
    <WingBlank className={`page-view ${className}`} style={style}>
        {children}
    </WingBlank>
);

export const SectionCard = ({ title = '', full, className = '', style, children }) => (
    <React.Fragment>
        <CardLite full={full} title={title} className={className} style={style}>
            {children}
        </CardLite>
        <WhiteSpace />
    </React.Fragment>
);

export const Section = ({ flex, title = '', tips, className = '', style, children }) => (
    <div className={`section ${flex ? 'flex' : ''}`}>
        {title && <div className="h2">{title}</div>}
        <div className={className} style={style}>
            {children}
            {tips && <div>{tips}</div>}
        </div>
    </div>
);

export const Block = ({ flex, title = '', tips, className = '', style, children }) => (
    <div className={`block ${className} ${flex ? 'flex' : ''}`} style={style}>
        {title && <div className="h3">{title}</div>}
        {children}
        {tips && <div>{tips}</div>}
    </div>
);
