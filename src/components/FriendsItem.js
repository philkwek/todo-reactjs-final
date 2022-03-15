import React, {useState, useEffect} from 'react';
import {XIcon} from '@heroicons/react/solid';
import $ from 'jquery';
import { data } from 'autoprefixer';

const FriendsItem = (props) => {

    const OpenFriendTasks = () =>{
        let friendData = {
            id: props.friendId,
            username: props.username
        }
        props.onOpenFriend(friendData);
    }

    return(
    <li className='hover:text-blue-500 hover:decoration-solid hover:underline duration-300 select-none cursor-pointer' 
    onClick={OpenFriendTasks} key={props.friendId}>
        {props.username}
    </li>
    );
};

export default FriendsItem;
