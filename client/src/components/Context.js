
import React, { useState } from 'react';

const users = {
   username:'',
    password:''
};

const UserContext = React.createContext(users);

export { users, UserContext };
