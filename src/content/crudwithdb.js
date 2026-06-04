export const crudwithdb = [
  {
    title: "crud With Db",
    code: `
 ------------------- main.jsx-----------------
 import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
--------------------App.jsx------------------

import './App.css'
import HomeRoute from './components/HomeRoute'
function App() {
  return (
    <div className='nk'>
     <HomeRoute/>
    </div>
  )
}

export default App
----------------------HomeRoute.jsx------------
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBarComp from './Sidebar';
import Dashboard from './Dashboard';
import Createstaff from './Createstaff';
import Managestaff from './Managestaff';

import Createshift from './Createshift';
import Manageshift from './Manageshift';
import Createallotshift from './Createallotshift';
import Manageallotshift from './Manageallotshift';
const HomeRoute = () => {
  return (
      <SideBarComp>
      <main style={{backgroundColor:'#E9EAEC'}}>
      {/* <main style={{backgroundColor:'#750f3eff'}}> */}
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route  path='/master/'>
        <Route path='createstaff' element={<Createstaff/>}/>
        <Route path='managestaff' element={<Managestaff/>}/>
        </Route>
        <Route  path='/shift/'>
        <Route path='createshift' element={<Createshift/>}/>
        <Route path='manageshift' element={<Manageshift/>}/>
        </Route>
        <Route  path='/allotshift/'>
        <Route path='createallotshift' element={<Createallotshift/>}/>
        <Route path='manageallotshift' element={<Manageallotshift/>}/>
        </Route>
        </Routes>
      </main>
      </SideBarComp> 
   
  )
}

export default HomeRoute
-------------------------------Sidebar.tsx--------------
import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu, menuClasses, MenuItemStyles } from 'react-pro-sidebar';
import { SidebarHeader } from './SidebarHeader';
// import { BarChart } from './icons/BarChart';
// import { Global } from './icons/Global';
// import { Book } from './icons/Book';
// import { Calendar } from './icons/Calendar';
import { Badge } from './Badge';
import { Typography } from './Typography';
import { Link } from 'react-router-dom';

type Theme = 'light' | 'dark';

const themes = {
  light: {
    sidebar: {
      backgroundColor: '#ffffff',
      color: '#607489',
    },
    menu: {
      menuContent: '#fbfcfd',
      icon: '#0098e5',
      hover: {
        backgroundColor: '#c5e4ff',
        color: '#44596e',
      },
      disabled: {
        color: '#9fb6cf',
      },
    },
  },
  dark: {
    sidebar: {
      backgroundColor: '#0b2948',
      color: '#8ba1b7',
    },
    menu: {
      menuContent: '#082440',
      icon: '#59d0ff',
      hover: {
        backgroundColor: '#00458b',
        color: '#b6c8d9',
      },
      disabled: {
        color: '#3e5e7e',
      },
    },
  },
};

// hex to rgba converter
const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return \`rgba(\${r}, \${g}, \${b}, \${alpha})\`;
};

export const SideBarComp: React.FC = (props: any) => {
  const [collapsed, setCollapsed] = React.useState(false);
  const [toggled, setToggled] = React.useState(false);
  const [broken, setBroken] = React.useState(false);
  const [rtl, setRtl] = React.useState(false);
  const [hasImage, setHasImage] = React.useState(false);
  const [theme, setTheme] = React.useState<Theme>('dark');
  // const [theme, setTheme] = React.useState<Theme>('light');

// 
  // handle on RTL change event
  const handleRTLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRtl(e.target.checked);
  };

  // handle on theme change event
  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? 'dark' : 'light');
  };

  // handle on image change event
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasImage(e.target.checked);
  };

  const menuItemStyles: MenuItemStyles = {
    root: {
      fontSize: '13px',
      fontWeight: 400,
    },
    icon: {
      color: themes[theme].menu.icon,
      [\`&.\${menuClasses.disabled}\`]: {
        color: themes[theme].menu.disabled.color,
      },
    },
    SubMenuExpandIcon: {
      color: '#b6b7b9',
    },
    subMenuContent: ({ level }) => ({
      backgroundColor:
        level === 0
          ? hexToRgba(themes[theme].menu.menuContent, hasImage && !collapsed ? 0.4 : 1)
          : 'transparent',
    }),
    button: {
      [\`&.\${menuClasses.disabled}\`]: {
        color: themes[theme].menu.disabled.color,
      },
      '&:hover': {
        backgroundColor: hexToRgba(themes[theme].menu.hover.backgroundColor, hasImage ? 0.8 : 1),
        color: themes[theme].menu.hover.color,
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

  return (
    <div style={{ display: 'flex', height: '100%', direction: rtl ? 'rtl' : 'ltr' }}>
      <Sidebar
        collapsed={collapsed}
        toggled={toggled}
        onBackdropClick={() => setToggled(false)}
        onBreakPoint={setBroken}
        image="https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg"
        rtl={rtl}
        breakPoint="md"
        backgroundColor={hexToRgba(themes[theme].sidebar.backgroundColor, hasImage ? 0.9 : 1)}
        rootStyles={{
          color: themes[theme].sidebar.color,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <SidebarHeader rtl={rtl} style={{ marginBottom: '24px', marginTop: '16px' }} />
          <div style={{ flex: 1, marginBottom: '32px' }}>
            <div style={{ padding: '0 24px', marginBottom: '8px' }}>
              <Typography
                variant="body2"
                fontWeight={600}
                style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' }}
              >
                General
              </Typography>
            </div>
            <Menu menuItemStyles={menuItemStyles}>
              <SubMenu
                label="Masters"
                // icon={<BarChart />}
                icon={<img src='/home.svg'/>}
                suffix={
                  <Badge variant="danger" shape="circle">
                    3
                  </Badge>
                }
              >
                <MenuItem component={<Link to="/master/createstaff" />}>Staff </MenuItem>
                {/* <MenuItem> Line charts</MenuItem>
                <MenuItem> Bar charts</MenuItem> */}
              </SubMenu>
              <SubMenu label="Shift" 
              // icon={<Global />}
              icon={<img src='/master.svg'/>}
              >
                <MenuItem component={<Link to="shift/createshift" />}> Shift create</MenuItem>
                <MenuItem component={<Link to="allotshift/createallotshift" />}> Shift Allocate</MenuItem>
              </SubMenu>
            </Menu>

            <div style={{ padding: '0 24px', marginBottom: '8px', marginTop: '32px' }}>
              <Typography
                variant="body2"
                fontWeight={600}
                style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' }}
              >
                Extra
              </Typography>
            </div>

            <Menu menuItemStyles={menuItemStyles}>
              <MenuItem 
              // icon={<Calendar />}
              icon={<img src='/icon1.svg'/>}
               suffix={<Badge variant="success">New</Badge>}>
                Staff Report
              </MenuItem>
              <MenuItem 
              // icon={<Book />}
              icon={<img src='/icon2.svg'/>}
              >Shift Report</MenuItem>
            </Menu>
          </div>
         
        </div>
      </Sidebar>
{props.children}
    </div>
  );
};
export default SideBarComp

------------------------------------ManageStaff.jsx-------------
import React from 'react';
import { useRef } from 'react';
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import * as serviceworker from '../Service/ServiceWorker';
import { useState,useEffect } from 'react';
import DataTable from 'react-data-table-component';
import Chip from '@mui/material/Chip';
import { Link } from 'react-router-dom';
import { MdEdit } from "react-icons/md";
import styled from 'styled-components';
const Managestaff = () => {
  const[rows,setRows]=useState();
  const[search_rows,set_search_rows]=useState();
  const [filterText, setFilterText] = React.useState('');
  const filterInputRef = useRef(null);
  // const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
  useEffect(()=>{
    getAllstaff();
  },[])
 
  // useEffect(()=>{
  //   alert(JSON.stringify(rows,null,2));
  // },[rows])
  
  const navigate = useNavigate();
const myfun=(e)=>{
  const val=e.target.value;
  setFilterText(()=>e.target.value)
  //alert(val);
   const filteredItems = rows.filter(
	 //	item => item.staff_name && item.staff_name.toLowerCase().includes(filterText.toLowerCase()),
	 	item => item.staff_name && item.staff_name.toLowerCase().includes(val.toLowerCase()),
	 );
set_search_rows(filteredItems);
filterInputRef.current.focus();
   }
  const getAllstaff=async()=>{
const{message,data,response_code}=await serviceworker.get_all_staff();
if(response_code == 200){
setRows(data);
set_search_rows(data);
}
}

const columns = [
	{
		name: 'ID',
		selector: row => row.id,
    sortable: true,
	},
	{
		name: 'NAME',
		selector: row => row.staff_name,
    sortable: true,
	},
  {
		name: 'AGE',
		selector: row => row.staff_age,
    sortable: true,
	},
  {
		name: 'STATUS',
		selector: row => row.deleted,
    sortable: true,
    // cell: row => <img height="84px" width="56px" alt={row.name} src={row.posterUrl} />,
    cell: row =>  <Chip label={row.deleted == 0 ? "Active":"Not Active" } color={row.deleted == 0 ? "success":"primary" } variant="outlined"/>,
	},
  {
		name: 'ACTION',
    button: true,
    cell: row =>  (<Link to="/master/createstaff" state={{edit:true,editdata:row}}><MdEdit /></Link>),
	},
];
const TextField = styled.input\`
	height: 32px;
	width: 200px;
	border-radius: 3px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border: 1px solid #e5e5e5;
	padding: 0 32px 0 16px;
	&:hover {
		cursor: pointer;
	}
\`;

const ClearButton = styled(Button)\`
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	height: 34px;
	width: 32px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
\`;
const onChange=(e)=>{
  alert(e.target.value);
}
const FilterComponent = ({ filterText, onFilter, onClear }) => (
	<>
		<TextField
			id="search"
			type="text"
			placeholder="Filter By Name"
			aria-label="Search Input"
			value={filterText}
			onChange={onFilter}
      ref={filterInputRef}
		/>
		<ClearButton type="button" onClick={onClear}>
			X
		</ClearButton>
	</>
);
const subHeaderComponentMemo = React.useMemo(() => {
  const handleClear = () => {
    if (filterText) {
      // setResetPaginationToggle(!resetPaginationToggle);
      setFilterText('');
    }
  };

  return (
    // <FilterComponent onFilter={onChange} onClear={handleClear} filterText={filterText} />
     <FilterComponent onFilter={ myfun} onClear={handleClear} filterText={filterText} />
  );
}, [filterText]);


  return (
    <div style={{ padding: "10px", height: "100%", boxSizing: 'border-box' }}>
      <Paper
        className="masterheader"
        square
        style={{boxSizing:"border-box", minWidth: "100%", height: "80px", marginBottom: "35px",padding:"5px 20px",display:"flex",justifyContent:"space-between",alignItems:"center"}}
      >
        <Typography variant="h5" gutterBottom>
          MANAGE STAFF
        </Typography>
        <Button variant="contained"  onClick={() => navigate("/master/createstaff")}>create staff</Button>
      </Paper>
      <Paper square style={{ Width: "100%", height: "80%", padding: "10px"}}>
      <DataTable
			columns={columns}
			data={search_rows}
      pagination
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
		/>
      </Paper>
    </div>
  )
}

export default Managestaff

-----------------------CreateStaff.jsx-----------
import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from '@mui/material/TextField';
import { Typography } from "@mui/material";
import { useState,useEffect } from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import * as serviceWorker from '../Service/ServiceWorker';
import { useLocation, useNavigate, useParams } from "react-router-dom";
const Createstaff = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state=location?.state;
  const editHandler=()=>{
    const{editdata}=state;
   // alert(JSON.stringify(editdata));
    setData({...data,
      staff_name:editdata.staff_name,
      staff_age:editdata.staff_age,
      staff_id:editdata.id,
      status:editdata.deleted})
    //  formik.handleChange();
    // ----------------------
    formik.setValues({
      staff_name: editdata.staff_name,
      staff_age: editdata.staff_age,
      staff_id: editdata.id,
      status: editdata.deleted.toString() // assuming status is expected as a string
    });
    // ----------------------
  }
  useEffect(()=>{
   // alert("ok");
   if(state?.edit) {
    editHandler();
   }else{
    setData({...data,staff_name:"",staff_age:"",staff_id:"",status:'0'})
   }
    
  },[state])

  //useEffect(()=>{alert(JSON.stringify(data))},[data])

  const [data, setData] = useState({staff_name:"",staff_age:"",staff_id:"",status:'0'});

  const validationSchema = yup.object({
    staff_name: yup
      .string('Enter your name')
      .required('Name is required'),
    staff_age: yup
      .number('Enter your age')
      .integer('Age should be an integer')
      .positive('Age should be a positive number')
      .required('Age is required'),
  });

  const formik = useFormik({
    initialValues: {
      staff_name: '',
      staff_age: '',
      staff_id:'',
      status:'0'
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
     // alert(JSON.stringify(values, null, 2));
     //----------------------------------------
handleMyFormSubmit(values);
     //----------------------------------------
    },
  });
// ----------------------------
const handleMyFormSubmit= async(inputdata)=>{
 // alert(JSON.stringify(inputdata));
const {message,response_code}=await serviceWorker.insertstaff(inputdata);
if(response_code==200){
  alert(message);
}
}
// ---------------------------
  const handleInput = (field, val) => {
    setData({...data, [field]: val});
    formik.handleChange(field)(val); // Manually trigger Formik's handleChange
  };

  return (
    <div style={{ padding: "10px", height: "100%", boxSizing: 'border-box' }}>
      <Paper
        className="masterheader"
        square
        style={{boxSizing:"border-box", minWidth: "100%", height: "80px", marginBottom: "35px",padding:"5px 20px",display:"flex",justifyContent:"space-between",alignItems:"center"}}
      >
        <Typography variant="h5" gutterBottom>
          CREATE STAFF
        </Typography>
        <Button variant="contained"  onClick={() => navigate("/master/managestaff")}>Manage</Button>
      </Paper>
      <Paper square style={{ Width: "100%", height: "80%", padding: "10px"}}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField 
                id="staff_name" 
                fullWidth 
                label="Enter Name" 
                variant="outlined" 
                value={formik.values.staff_name}
                onChange={(event) => {
                  handleInput("staff_name", event.target.value);
                }}
                error={formik.touched.staff_name && Boolean(formik.errors.staff_name)}
                helperText={formik.touched.staff_name && formik.errors.staff_name}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField 
                id="staff_age" 
                fullWidth 
                label="Enter Age" 
                variant="outlined" 
                value={formik.values.staff_age} 
                onChange={(event) => {
                  handleInput("staff_age", event.target.value);
                }}
                error={formik.touched.staff_age && Boolean(formik.errors.staff_age)}
                helperText={formik.touched.staff_age && formik.errors.staff_age}
              />
            </Grid>
            <Grid item xs={12} md={4}> </Grid>
            <Grid item xs={12} md={4}>
              <Button 
                variant="contained" 
                size="small"  
                onClick={formik.handleSubmit}
              >
                OK
              </Button>
            </Grid>
            <Grid item xs={12} md={4}> </Grid>
          </Grid>
        </Box>
      </Paper>
    </div>
  );
};

export default Createstaff;
-------------------------------Service---------------
-------------------------------Api.js---------------
import axios from 'axios';
//export const BASE_URL = "localhost/mycrud/api/";
export const BASE_URL = "http://localhost:80/mycrud/api/";
//export const BASE_URL = "192.168.1.60/mycrud/api/";
//export const BASE_URL = "http://192.168.1.60/mycrud/api/";
export const API = axios.create({
    baseURL:BASE_URL
})

-------------------------------ServiceWorker.js---------------
import {API} from './Api';
export const insertstaff = (data) => {
  const input_data = {
    action: "insert_staff",
    ...data
  };

  return API.post('/staff/', input_data)
    .then((res) => res.data);
};

export const get_all_staff = () => {
    const input_data = {
    action: "get_all_staff"
  };
  return API.post('/staff/', input_data)
  .then((res) => res.data);
};

---------------------------BACKEND ------------------------------
---------------------------|common| ------------------------------
---------------------------apiHeader.php---------------------------
<?php
require_once('../database/Database.php');
$db = new Database();
$main_folder = str_replace('\\', '/', 'api');
$document_root = str_replace('\\', '/', $_SERVER['HTTP_HOST']);
$main_folder = str_replace($document_root, '', $main_folder);
$current_url = $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] . '/' . ltrim($main_folder, '/') . '/';

$todays_date = date('Y-m-d');
$today = date('d-m-Y');
$json = file_get_contents('php://input');
$params = (array)json_decode($json);

---------------------------|database| ------------------------------
---------------Connection.php----------
<?php
date_default_timezone_set("Asia/Kolkata");
class Connection
{

	protected $isConn;
	protected $datab;
	protected $transaction;

	//public function __construct($username = "u627610043_delice", $password = '8Hy$x]0o^', $host = "localhost", $dbname = "u627610043_delice", $options = [])
	public function __construct($username = "root", $password = '', $host = "localhost", $dbname = "mycrud", $options = [])
	{
		$this->isConn = TRUE;
		try {
			$this->datab = new PDO("mysql:host={$host};  dbname={$dbname}; charset=utf8", $username, $password, $options);
			$this->datab->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$this->transaction = $this->datab;
			$this->datab->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
			// echo 'Connected Successfully!!!';
		} catch (PDOException $e) {
           // echo 'Connected fail!!!';
			throw new Exception($e->getMessage());
		}
	} //endDefaultConstructor


	//disconnect from db
	public function Disconnect()
	{
		$this->datab = NULL; //close connection in PDO
		$this->isConn = FALSE;
	} //endDisconnectFunction
} //endClassDatabase

// $sqli_db = mysqli_connect("192.168.0.113", "root", "", "pss");
//$sqli_db = mysqli_connect('localhost', 'u627610043_delice', '8Hy$x]0o^', 'u627610043_delice');
$sqli_db = mysqli_connect('localhost', 'root', '', 'mycrud');
 //$con = new Connection(); //for debugging only
//echo '	debug connection';

-----------Database.php--------
<?php 
require_once('Connection.php'); //my connection is here

class Database extends Connection{


	public function __construct(){

		parent::__construct();//put this if naay default constructor and class na iya ge extendnan para ma apil sad diri
		//above code copy the default constructor of the class extended

		if(session_status() == PHP_SESSION_NONE)
		{
			session_start();//start session if session not start
		}

	}//endDefaultConstructor

	//disconnect is in the parent class in connection.php

	//get row
	public function getRow($query, $params = []){
		try {
			$stmt = $this->datab->prepare($query);
			$stmt->execute($params);
			return $stmt->fetch();	
		} catch (PDOException $e) {
			throw new Exception($e->getMessage());	
		}


	}//end getRow

	//get rows
	public function getRows($query, $params = []){
		try {
			$stmt = $this->datab->prepare($query);
			$stmt->execute($params);
			return $stmt->fetchAll();	
		} catch (PDOException $e) {
			throw new Exception($e->getMessage());	
		}
	}//end getRows

	//insert row
	public function insertRow($query, $params = []){
		try {
			$stmt = $this->datab->prepare($query);
			$stmt->execute($params);
			return TRUE;	
		} catch (PDOException $e) {
			throw new Exception($e->getMessage());	
		}

	}//end insertRow

	//update row
	public function updateRow($query, $params = []){
		$this->insertRow($query, $params);
		return true;
	}//end updateRow

	//delete row
	public function deleteRow($query, $params = []){
		$this->insertRow($query, $params);
		return true;
	}//end deleteRow

	//get the last inserted ID
	public function lastID(){
		$lastID = $this->datab->lastInsertId(); 
		return $lastID;
	}//end lastID func


	//under construction kay dili pa mo gana!!!!
	public function transInsert($query, $params = [], $query2, $params2 = []){
		try {
			$this->transaction->beginTransaction();
				$stmt = $this->datab->prepare($query);
				$stmt->execute($params);

				$stmt2 = $this->datab->prepare($query2);
				$stmt2->execute($params2);

			$this->transaction->commit();
		} catch (PDOException $e) {
			$this->transaction->rollBack();
			throw new Exception($e->getMessage());	
		}
	}//end transac func


	public function Begin(){
		$this->transaction->beginTransaction();
	}

	public function Commit(){
		$this->transaction->commit();
	}

	public function test()
	{
		echo 'database class test';
	}
}


 ?>
---------------------------|staff| ------------------------------
----------------index.php---------------
<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');
require_once('../database/Database.php');
//require_once('../database/Connection.php');
//echo "nk";
require_once('../common/apiHeader.php');
if (isset($params['action'])) {
    $action = $params['action'];
 //   echo $action;
 if ($action == 'insert_staff') {
  $staff_name = mysqli_real_escape_string($sqli_db, $params['staff_name']);
   $staff_age = mysqli_real_escape_string($sqli_db, $params['staff_age']);
   $staff_id = mysqli_real_escape_string($sqli_db, $params['staff_id']);
   $status = mysqli_real_escape_string($sqli_db, $params['status']);
    // if(empty($table_name)){
    //   echo json_encode(array("message" => "Table Name is Must","response_code" => 300,"key"=>"table_name"));
    //   return;
    // }
    // if(empty($table_code)){
    //    echo json_encode(array("message" => "Table Code is Must","response_code" => 300,"key"=>"table_code"));
    //   return;
    // }
   
 require_once('./staff.php');
    
    // if (empty($table_id)) {
    //     $exist_table_code = check_table_code_exist($table_code,$user_id);
    //     if(!empty($exist_table_code)){
    //         echo json_encode(array("message" => "Table Code Already Exist Try Somthing New","response_code" => 300,"key"=>"table_code"));
    //        return;
    //      }
    // }

        if(!empty($staff_id)){
            $update_staff = master_update_staff($staff_name,$staff_age,$staff_id,$status);
            if ($update_staff) {
                echo json_encode(array("message" => "staff Updated Successfully", "response_code" => 200));
            } else {
                echo json_encode(array("message" => "staff Update Failed",  "response_code" => 300));
            }
            return;
        }
        $insert_data = master_insert_staff($staff_name,$staff_age,$staff_id,$status);
        if ($insert_data) {
            echo json_encode(array("message" => "staff Added Successfully", "response_code" => 200));
        } else {
            echo json_encode(array("message" => "staff Add Failed", "response_code" => 300));
        }
}  

if ($action == 'get_all_staff') {
   require_once('./staff.php');
          
          $all_staff_data = get_all_staff();
          if ($all_staff_data) {
              echo json_encode(array("message" => "staff get Successfully","data"=>$all_staff_data, "response_code" => 200));
          } else {
              echo json_encode(array("message" => "staff get Failed","data"=>[], "response_code" => 300));
          }
  } 

}
?>

-------------staff.php-------------
<?php
require_once('../database/Database.php');

function master_insert_staff($staff_name,$staff_age,$staff_id,$status){
  $db = new Database();
  $sql= "INSERT INTO \`staff\`(\`staff_name\`, \`staff_age\`) VALUES(?,?)";
  $insert = $db->insertRow($sql,[$staff_name,$staff_age]);
  return $insert;
}
function master_update_staff($staff_name,$staff_age,$staff_id,$status){
  $db = new Database();
  $sql= "UPDATE \`staff\` SET \`staff_name\` = ?, \`staff_age\` = ?,\`deleted\`= ? WHERE \`id\` = ?";
  $update = $db->insertRow($sql,[$staff_name,$staff_age,$status,$staff_id]);
  return  $update;
}

function get_all_staff(){
  $db = new Database();
  $sql= "SELECT * FROM \`staff\`";
 // $sql= "SELECT * FROM \`staff\` WHERE \`deleted\` = 0";
  $update = $db->getRows($sql);
  return  $update;
}
`,
  },
];
