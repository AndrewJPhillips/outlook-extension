// Ordinarily for something like this I would use
// axios to make requests etc. For this, I have just
// created a quick mock call with a promise.


const MATTERS = [
    {
        id: 0,
        from: 'John Smith',
        summary: 'This is a summary about something',
        content: 'Dear Sir/Madam, \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.' +
            ' non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n John Smith',
        readStatus: false,
        date: '2020/03/01'
    },
    {
        id: 1,
        from: 'Capita plc',
        summary: 'Monetary Issue',
        content: 'Dear Sir/Madam, \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.' +
            ' non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n Capita Plc',
        readStatus: false,
        date: '2020/02/27'
    },
    {
        id: 2,
        from: 'Sam Blake',
        summary: 'Fraudulent Claims',
        content: 'Dear Sir/Madam, \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.' +
            ' non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n Sam Blake',
        readStatus: false,
        date: '2020/02/26'
    },
    {
        id: 3,
        from: 'Arrow Group',
        summary: 'This is another summary about something',
        content: 'Dear Sir/Madam, \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.' +
            ' non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n Arrow Group',
        readStatus: false,
        date: '2020/02/24'
    },
    {
        id: 4,
        from: 'Jade Parson',
        summary: 'Tax Fraud',
        content: 'Dear Sir/Madam, \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.' +
            ' non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n Jade Parson',
        readStatus: false,
        date: '2020/02/21'
    },
    {
        id: 5,
        from: 'John Smith',
        summary: 'Cease and Desist',
        content: 'Dear Sir/Madam, \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.' +
            ' non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n John Smith',
        readStatus: false,
        date: '2020/03/01'
    },
    {
        id: 6,
        from: 'Capita plc',
        summary: 'This is another summary about something',
        content: 'Dear Sir/Madam, \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.' +
            ' non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n Capita Plc',
        readStatus: false,
        date: '2020/02/27'
    },
    {
        id: 7,
        from: 'Sam Blake',
        summary: 'This is another summary about something',
        content: 'Dear Sir/Madam, \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.' +
            ' non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n Sam Blake',
        readStatus: false,
        date: '2020/02/26'
    },
    {
        id: 8,
        from: 'Arrow Group',
        summary: 'This is another summary about something',
        content: 'Dear Sir/Madam, \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.' +
            ' non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n Arrow Group',
        readStatus: false,
        date: '2020/02/24'
    },
    {
        id: 9,
        from: 'Jade Parson',
        summary: 'This is another summary about something',
        content: 'Dear Sir/Madam, \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.' +
            ' non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n Jade Parson',
        readStatus: false,
        date: '2020/02/21'
    }
];

/**
 * @description A mock api call to return matters.
 * @returns {Promise<any>}
 */
export const getMatters = () => {

    return new Promise(resolve =>  {
        setTimeout(() => {
            resolve(MATTERS);
        }, 3500);
    });

};