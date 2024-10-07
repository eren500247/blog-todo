import React, { useState } from "react";
import { BrowserRouter, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { Menu } from "@mui/icons-material";
import CreateCategoty from "./CreateCategoty";
import CreatePost from "./CreatePost";
import HomePage from "./HomePage";
import MeMePage from "./MeMePage";
import MotiQuotesPage from "./MotiQuotesPage";
import PageDetail from "./PageDetail";
import {
  Avatar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { set } from "firebase/database";
import TodoPage from "./TodoPage";

const AppStarter = () => {
  const [showStatus, setShowStatus] = useState({
    category: false,
    post: false,
  });
  const navigate = useNavigate()
  const [showDrawer, setShowDrawer] = useState(false);
  const handleClose = (e) => {
    setShowStatus({ ...showStatus, [e]: !showStatus[e] });
  };

  const handleDrawerClose = () => {
    setShowDrawer(!showDrawer);
  };

  const handleRoutePage = (pageName)=>{
    navigate(pageName)
    setShowDrawer(!showDrawer);
  }

  return (
    <div>
      <header>
        <div className="w-ful text-white py-5 px-3 flex justify-between shadow-lg">
          <div className="flex gap-2 flex-1 items-center">
            <IconButton onClick={()=>handleDrawerClose()}>
              <Menu sx={{ color: "black" }} />
            </IconButton>
            <h1 className="text-2xl text-black">Blog</h1>
          </div>
          <div>
            <button onClick={() => handleClose("post")} className="create-btn">
              Create Post
            </button>
            <button
              onClick={() => handleClose("category")}
              className="create-btn"
            >
              Create Category
            </button>
          </div>
        </div>
      </header>
      <CreateCategoty
        showCategory={showStatus.category}
        handleClose={() => handleClose("category")}
      />
      <CreatePost
        showCategory={showStatus.post}
        handleClose={() => handleClose("post")}
      />
      {/* <HomePage showCategory={showStatus.post} handleClose={()=>handleClose("post")}/> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/pageDetail/:id" element={<PageDetail />} />
          <Route path="/meme" element={<MeMePage />} />
          <Route path="/moti" element={<MotiQuotesPage />} />
        </Routes>
      </BrowserRouter> */}
      <div className="px-2 py-5"><Outlet /></div>
      <Drawer open={showDrawer} onClose={() => handleDrawerClose()}>
        <List sx={{margin : "10px"}}>
          <ListItem>
            <ListItemAvatar sx={{display :"flex",gap: "10px",alignItems: "center"}}>
              <Avatar src="" alt="Name" />
              <ListItemText primary="Name"/>
            </ListItemAvatar>
          </ListItem>
          <ListItem onClick={()=>handleRoutePage("/")}>
            <ListItemText primary="Home" sx={{cursor : "pointer"}}/>
          </ListItem>
          <ListItem onClick={()=>handleRoutePage("/todo")}>
            <ListItemText primary="Todo" sx={{cursor : "pointer"}}/>
          </ListItem>
          <ListItem onClick={()=>handleRoutePage("/meme")}>
            <ListItemText primary="Meme" sx={{cursor : "pointer"}}/>
          </ListItem>
          <ListItem onClick={()=>handleRoutePage("/moti")}>
            <ListItemText primary="Moti Quote" sx={{cursor : "pointer"}}/>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

// export default AppStarter;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppStarter />}>
          <Route path="/" element={<HomePage />}/>
          <Route path="/pageDetail/:id" element={<PageDetail />} />
          <Route path="/todo" element={<TodoPage />}/>
          <Route path="/meme" element={<MeMePage />} />
          <Route path="/moti" element={<MotiQuotesPage />} />
        </Route>
        
      
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
