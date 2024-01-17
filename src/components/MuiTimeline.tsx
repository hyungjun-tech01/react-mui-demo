import React from 'react';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
} from "@mui/lab";

export const MuiTimeline = () => {
  return (
    <Timeline>
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot color="secondary" variant="outlined"/>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>City A</TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot color="primary"/>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>City B</TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>City C</TimelineContent>
        </TimelineItem>        
    </Timeline>
  )
}
