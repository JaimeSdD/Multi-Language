import { DateTime } from 'luxon'
import React from 'react'

const greeting = (d = DateTime.now()) => {
    const afternoon = 12;
    const evening = 17;
    const currentHour = parseFloat(d.toFormat("HH"));

    if (currentHour >= afternoon && currentHour <= evening) {
		return 'afternoon';
	} else if (currentHour >= evening) {
		return 'evening';
  } 
      return 'morning';
}

const Footer = ({t}) => {
  return (
    <div>
        <div>{t('footer.date', { date: new Date(), context: greeting() })}</div>
    </div>
  )
}

export default Footer
