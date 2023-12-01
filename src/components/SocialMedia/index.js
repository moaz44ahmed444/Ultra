import React, { useEffect, useState } from 'react'
import {SocialMediaSection, SocialDesk, Social, Span, SpanInfo, Icon} from './style.js';
import axios from "axios";

function SocialMedia() {

  const [icons , setIcons] = useState([]);
  useEffect( () => {
    axios.get('js/data.json').then(res => {setIcons(res.data.social)})
  }, [] )

  const SocialIcons = icons.map((iconItem) => {
    return (
      <Social item = {iconItem.id} key={iconItem.id} >
        <Icon className={iconItem.icon} ></Icon>
        <SocialDesk>
            <Span >{iconItem.title}</Span>
            <SpanInfo >{iconItem.body}</SpanInfo>
        </SocialDesk>
      </Social>
    )
  })
  return (
    <SocialMediaSection>
      {SocialIcons}
    </SocialMediaSection>
  )
}

export default SocialMedia