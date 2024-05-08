






















// import React, { useState, useEffect } from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import AddHomeIcon from '@mui/icons-material/AddHome';
// import SettingsIcon from '@mui/icons-material/Settings';
// import CssBaseline from '@mui/material/CssBaseline';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';


// const drawerWidth = 240;
// const DashboardSideBar=()=> {
//     const [selectedItemId, setSelectedItemId] = useState(null); 

//     const handleItemClick = (itemId) => {
//       setSelectedItemId(itemId);
//     };
//     const [ response, setResponse] = useState([])
  
        

//   return (
//     <div className='pt-40'> 
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//             <Drawer variant="permanent" anchor="left">
//         <Box sx={{ overflow: 'auto' }}>
//           <List>
//             {[
//               { id: 'home', text: 'Home' },
//               { id: 'create', text: 'Create' },
//               { id: 'favorite', text: 'Favorites' },
//               { id: 'bookmark', text: 'Bookmark' },
//               {id: 'setting', text: 'Settings'}
//             ].map(({ id, text }) => (
//               <ListItem key={id} disablePadding>
//                 <ListItemButton onClick={() => handleItemClick(id)}>
//                   <ListItemIcon>
//                     {id === 'home' ? <AddHomeIcon /> : id === 'create' ? <CreateIcon/>: id === 'favorite' ? <FavoriteBorderIcon/> : id === 'bookmark' ? <BookmarkIcon/>: id === 'setting' ? <SettingsIcon/>: ''}
//                   </ListItemIcon>
//                   <ListItemText primary={text} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//           <Divider />
//         </Box>
//       </Drawer>

//       <Box component="main" sx={{ flexGrow: 1, p: 20}}>
//         {selectedItemId === 'home' && (
//          <div className='text-orange-400 text-5xl'>
//          This is a Home
//         </div>
//         )}
//         {selectedItemId === 'create' && (
//           <div className='text-orange-400 text-5xl' text-5xl>
//             This is a create
//           </div>
//         )}
//         {selectedItemId === 'favorite' && (
//           <div className='text-orange-400 text-5xl' text-5xl>
//             This is a favorite
//           </div>
//         )}
//         {selectedItemId === 'bookmark' && (
//           <div className='text-orange-400 text-5xl' text-5xl>
//             This is a bookmark
//           </div>
//         )}
//          {selectedItemId === 'setting' && (
//           <div className='text-orange-400 text-5xl' text-5xl>
//             This is a Setting
//           </div>
//         )}
//       </Box>
//     </Box>
//     </div>
//   );
// }
// export default DashboardSideBar


