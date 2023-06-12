import * as React from 'react'
import { styleReset } from 'react95'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import original from 'react95/dist/themes/original'
// @ts-ignore



import { Title } from './Title'
import { Window } from './Window'

const GlobalStyles: any = createGlobalStyle`

  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
  ${styleReset}
`

const PAGE_TITLES = ["And it", 'all', 'started', 'with', ' a ...']

const ThemeProviderProxy: any = ThemeProvider

export default function Started() {
  return (
    <div>
      <GlobalStyles />
      <ThemeProviderProxy theme={original}>
        {PAGE_TITLES.map(title => (
          <div className='h-screen flex justify-center items-center text-[20vw] font-extrabold font-mono' key={title}>
            <Title>{title}</Title>
          </div>
        ))}
        <div className='h-screen flex justify-center items-center font-mono'>
          <Window  soundSource='./sounds/CHORD.WAV'/>
        </div>
      </ThemeProviderProxy>
    </div>
  )
}

