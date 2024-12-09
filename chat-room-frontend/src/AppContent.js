import React, {useState, useContext, useEffect} from 'react'
import io from 'socket.io-client'
import jwtDecode from 'jwt-decode'
import ChatRoomList from './components/ChatRoomList'
import MessageList from './components/MessageList'
import MessageList from './components/MessageList'
import MessageInput from './components/MessageInput'
import LoginForm from './components/Login'
import SignupForm from './components/Signup'
import { AuthContext } from './components/AuthContext'