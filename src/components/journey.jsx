import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Journey = () => {
  return (
    <div className=' py-7'>
        <h1 className='text-center text-white text-3xl font-semibold'>Let's See My Journey</h1>
        <div className='py-5'>
            <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2023 - Now"
                contentStyle={{ background: '#334155', color: '#fff' }}
                iconStyle={{ background: '#334155', color: '#ffff' }}>
                <h3 className="vertical-timeline-element-title md:text-xl font-semibold">Learn about web developers & mobile developers</h3>
                <br />
                <h4 className="vertical-timeline-element-subtitle">Now learning Mern, Laravel & Flutter</h4>
                <p>

                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="August - november 2022"
                contentStyle={{ background: '#334155', color: '#fff' }}
                iconStyle={{ background: '#334155', color: '#ffff' }}>
                <h3 className="vertical-timeline-element-title md:text-xl font-semibold">Comptia Linux+ & Bootcamp Cloud Computing</h3>
                <br />
                <h4 className="vertical-timeline-element-subtitle">Get a certification scholarship opportunity from Adinusa and get cloud computing training</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date=" February - April 2022"
                contentStyle={{ background: '#334155', color: '#fff' }}
                iconStyle={{ background: '#334155', color: '#ffff' }}>
                <h3 className="vertical-timeline-element-title md:text-xl font-bold">Web Developer Intern</h3>
                <br />
                <h4 className="vertical-timeline-element-subtitle">PT Cyber Edu Inkor</h4>
                <p>
                    develop website projects using vue.js and nuxt.js framework, help add features in other projects using laravel
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2021 - 2023"
                contentStyle={{ background: '#334155', color: '#fff' }}
                iconStyle={{ background: '#334155', color: '#ffff' }}>
                <h3 className="vertical-timeline-element-title md:text-xl font-bold">Student at SMKN 2 Jakarta</h3>
                <br />
                <h4 className="vertical-timeline-element-subtitle">Software engineering major <br /> (Rekayasa Perangkat Lunak)</h4>
                <p>
                    Web Developer & Mobile Developer
                </p>
            </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    </div>
  )
}

export default Journey