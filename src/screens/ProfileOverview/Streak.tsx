import React, { FC } from 'react'
import gql from 'graphql-tag'
// @ts-ignore
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Streak_UserFragment } from '../../generated/graphql'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 30,
  },
  calendarWrapper: {
    display: 'inline',
    backgroundColor: 'white',
    marginTop: 15,
    height: 100,
    color: theme.palette.text.primary,
  },
  calendar: {
    border: '1px solid #eee',
    borderRadius: 5,
    '& .react-calendar__tile--hasActive, .react-calendar__tile--hasActive:enabled:hover, .react-calendar__tile--hasActive:enabled:focus': {
      background: '#f5e15f',
    },
    '& .react-calendar__month-view__days__day--weekend': {
      color: '#d10000 !important',
    },
    '& .react-calendar__month-view__days__day--neighboringMonth': {
      color: '#ababab !important',
    },
    '& .react-calendar__tile--now, .react-calendar__tile--now:enabled:hover, .react-calendar__tile--now:enabled:focus': {
      background: theme.palette.primary.main,
      color: 'white !important',
    },
    '& .react-calendar__tile--active, .react-calendar__tile--active:enabled:hover, .react-calendar__tile--active:enabled:focus': {
      background: '#f5e15f',
      color: 'white',
    },
  },
  calendarTile: {
    color: theme.palette.text.primary,
  },
  streaks: {
    fontWeight: 500,
    marginLeft: 10,
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 15,
  },
}))

interface StreakProps {
  user?: Streak_UserFragment
}

const Streak: FC<StreakProps> = ({ user }) => {
  const classes = useStyles()
  const streaks = user?.consecutiveStudyDays

  return (
    <div className={classes.root}>
      <div className={classes.titleWrapper}>
        <Typography variant="h1">Streak</Typography>
        <Typography className={classes.streaks}>({streaks?.length || 0} Days)</Typography>
      </div>
      <div className={classes.calendarWrapper}>
        <Calendar
          className={classes.calendar}
          tileClassName={classes.calendarTile}
          value={streaks ? [new Date(streaks[streaks?.length - 1]), new Date(streaks[0])] : new Date()}
        />
      </div>
    </div>
  )
}

export default Streak

gql`
  fragment Streak_user on User {
    consecutiveStudyDays
  }
`
