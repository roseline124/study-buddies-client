import React, { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon'

const GithubMark: FC<SvgIconProps> = props => {
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width="160"
      height="160"
      version="1"
      viewBox="0 0 120 120"
      {...props}
    >
      <path
        d="M452 1170c-109-29-187-74-272-160C93 924 49 847 20 734-16 593 2 440 72 307c48-92 164-205 259-251C434 5 444 8 448 91l3 66h-59c-75 0-116 23-147 84-13 26-38 58-55 73-36 29-31 51 9 41 32-8 51-23 47-38-1-7-1-8 2-4 5 9 32-11 32-25 0-5-4-6-10-3-5 3-10 1-10-5 0-7 6-10 14-7s22-3 31-13c39-43 137-37 153 8 6 15 13 34 17 43 5 13-2 18-35 23-60 9-135 50-165 90-60 79-73 213-29 306 19 39 26 69 25 103-2 26 0 61 4 77 9 40 43 40 119 1 55-28 59-28 132-18 53 8 95 8 148 0 73-10 77-10 132 18 76 39 110 39 119-1 4-16 6-51 4-77-1-34 6-64 25-103 44-93 31-227-29-306-31-41-108-82-169-90l-45-7 17-25c13-20 18-57 22-151 6-151 6-151 119-95 95 46 211 159 259 251 42 80 72 198 72 283s-30 203-72 283c-42 81-164 203-245 245-132 69-291 88-431 52z"
        transform="matrix(.1 0 0 -.1 0 120)"
      ></path>
      <path
        d="M290 240c0-5 5-10 10-10 6 0 10 5 10 10 0 6-4 10-10 10-5 0-10-4-10-10zM330 220c0-5 5-10 10-10 6 0 10 5 10 10 0 6-4 10-10 10-5 0-10-4-10-10zM425 220c-3-5 1-10 10-10s13 5 10 10c-3 6-8 10-10 10s-7-4-10-10zM380 210c0-5 5-10 10-10 6 0 10 5 10 10 0 6-4 10-10 10-5 0-10-4-10-10z"
        transform="matrix(.1 0 0 -.1 0 120)"
      ></path>
    </SvgIcon>
  )
}

export default GithubMark
