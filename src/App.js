import { useEffect ,useState} from 'react';
import './App.css';
import './destyle.css'
import Header from './Header';
import ThreadList from './ThreadList';
import CreeateThereds from './CreateThreds';
import { Routes, Route } from "react-router-dom";
import NoMatch from './nomatch.js'
import { getThreads } from './ThreadList';
import { ThreadDetail } from './ThreadDetail.js';
function App() {
  return(
    <div class="body">
      <Header />
      <Routes>
        <Route path="/" element={<ThreadList/>}/>
        <Route path="/thread/new" element={<CreeateThereds />}/>
        <Route path="*" element={<NoMatch />} />
        <Route path="/thread/:threadId"  element={<ThreadDetail />}/>
      </Routes>
    </div>
  );
}
export default App;
