import '../App.css';
import { Timeline } from 'rsuite';
import Wrench from '@rsuite/icons/legacy/Wrench';
import TwinkleStar from '@rsuite/icons/legacy/TwinkleStar';
import Trash from '@rsuite/icons/legacy/Trash';
import EmailFillIcon from '@rsuite/icons/EmailFill';
import PageIcon from '@rsuite/icons/Page'; import "rsuite/dist/rsuite.css";

export function LiveFeed() {
    return (
        <div className="liveFeed">
            <div className="dashboardTitle"> Live Feed</div>
            <Timeline className="custom-timeline">
                <Timeline.Item dot={<Wrench />}>
                    <b>April 27, 10:20</b>
                    <p>Toyota Yaris DM121 has been sent to workshop</p>
                </Timeline.Item>
                <Timeline.Item dot={<TwinkleStar />}>
                    <b>April 27, 10:15</b>
                    <p>Kia Rio RXF67 has been cleaned</p>
                </Timeline.Item>
                <Timeline.Item dot={<TwinkleStar />}>
                    <b>April 27, 10:10</b>
                    <p>Toyota Aygo OHF00 has been cleaned</p>
                </Timeline.Item>
                <Timeline.Item dot={<Trash />}>
                    <b>April 26, 23:17</b>
                    <p>Booking #52405 has been cancelled by a customer</p>
                </Timeline.Item>
                <Timeline.Item dot={<EmailFillIcon />}>
                    <b>April 26, 19:35</b>
                    <p>New inquiry</p>
                </Timeline.Item>
                <Timeline.Item dot={<PageIcon />}>
                    <b>April 26, 17:53</b>
                    <p>Booking #52412 has been created by a customer</p>
                </Timeline.Item>
                <Timeline.Item dot={<TwinkleStar />}>
                    <b>April 26, 15:55</b>
                    <p>Mercedes Vito GRF34 has been sent to cleaning</p>
                </Timeline.Item>
                <Timeline.Item dot={<Wrench />}>
                    <b>April 26, 14:42</b>
                    <p>Kia Ceed SW NPX87 has been fixed</p>
                </Timeline.Item>
            </Timeline>
        </div>
    )
}


