import React from 'react';
import Icon from './';
import IconsConfig from '../../assets/icons/toxic-icons/config';
import '../../styles/stories.scss';

export default {
  title: 'Toxic UI/A·基础 Basis/Icons',
  component: Icon
};

export const AllIcons = () => (
  <div className='icons-container'>
    <h1>{IconsConfig.basic.length} Basic Icons</h1>
    <div className='icon-group'>
      {IconsConfig.basic.map((v, i) => (
        <div className='icon-block' key={i}>
          <Icon name={v} />
          <span className='icon-name'>{v}</span>
        </div>
      ))}
    </div>
    <h1>{IconsConfig.outline.length} Outline Icons</h1>
    <div className='icon-group'>
      {IconsConfig.outline.map((v, i) => (
        <div className='icon-block' key={i}>
          <Icon name={v} />
          <span className='icon-name'>{v}</span>
        </div>
      ))}
    </div>
    <h1>{IconsConfig.filled.length} Filled Icons</h1>
    <div className='icon-group'>
      {IconsConfig.filled.map((v, i) => (
        <div className='icon-block' key={i}>
          <Icon name={v} />
          <span className='icon-name'>{v}</span>
        </div>
      ))}
    </div>
  </div>
);

export const IconColor = () => (
  <div className='icons container'>
    <Icon name='chat-o' color='#1976D2' />
    <Icon name='add' color='#BBDEFB' />
    <Icon name='add-square' color='#4CAF50' />
    <Icon name='after-sale' color='#FFA000' />
  </div>
);

export const IconSize = () => (
  <div className='container icons' size='18px'>
    <Icon name='chat-o' size='28px' />
    <Icon name='add' size='38px' />
    <Icon name='add-square' size='48px' />
    <Icon name='after-sale' size='58px' />
  </div>
);

export const IconDotsAndBadges = () => (
  <div className='container icons'>
    <Icon name='chat-o' dot />
    <Icon name='add' badge='1' />
    <Icon name='add-square' badge='12' />
    <Icon name='after-sale' badge='99+' />
  </div>
);
export const IconTags = () => (
  <div className='container icons'>
    <Icon name='chat-o' tag='i' />
    <Icon name='add' tag='span' />
  </div>
);

export const IconAction = () => (
  <div className='container icons'>
    <Icon name='chat-o' click={(e) => window.alert(e.target)} />
  </div>
);
