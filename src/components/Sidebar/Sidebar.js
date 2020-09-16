import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow/SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected text="Home" Icon={HomeIcon} />
            <SidebarRow text="Trending" Icon={WhatshotIcon} />
            <SidebarRow text="Subscription" Icon={SubscriptionsIcon} />
            <hr />
            <SidebarRow text="Library" Icon={VideoLibraryIcon} />
            <SidebarRow text="History" Icon={HistoryIcon} />
            <SidebarRow text="Your Videos" Icon={OndemandVideoIcon} />
            <SidebarRow text="Watch Later" Icon={WatchLaterIcon} />
            <SidebarRow text="Liked Videos" Icon={ThumbUpAltOutlinedIcon} />
            <SidebarRow text="Show more" Icon={ExpandMoreOutlinedIcon} />
            <hr />
        </div>
    )
}

export default Sidebar;
