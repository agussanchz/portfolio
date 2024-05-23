
'use client'
import Navbar from '@/components/Navbar'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function SobreMi() {
  return (
    <>
    <div className='flex justify-center justify-items-center items-center p-10'>
      <Navbar />
    </div>
      <VerticalTimeline
        lineColor='#292727ca'
        >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#292727ca', color: '#fff'}}
          contentArrowStyle={{ borderRight: '7px solid  #b75591' }}
          date="2011 - present"
          iconStyle={{ background: '#292727ca', color: '#b75591'}}
          visible="true"
        >
          <h3 className="vertical-timeline-element-title text-[#b75591]">Distribuidora Monseñor</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p className='text-[#727070]'>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#292727ca', color: '#fff'}}
          contentArrowStyle={{ borderRight: '7px solid  #b75591' }}
          date="2011 - present"
          iconStyle={{ background: '#292727ca', color: '#b75591'}}
          visible="true"
        >
          <h3 className="vertical-timeline-element-title text-[#b75591]">Distribuidora Monseñor</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p className='text-[#727070]'>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
   </>
    
  )
}
