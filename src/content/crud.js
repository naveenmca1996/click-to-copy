export const crud = [
  {
    title: "crud",
    code: `
 ------------------- main.jsx-----------------

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
//   ------------------App.jsx------------------------
import HomeRoute from "./HomeRoute"
import './App.css'
function App() {

  return (
    <div className="nk">
   <HomeRoute/>
    </div>
  )
}
export default App
//   ------------------HomeRoute.jsx------------------------
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import DashBoard from './component/dashboard/dashBoard';
import User from './component/user/UserList';
import CreateUser from './component/user/CreateUser';
import {Playground} from './component/sidebar/Sidebar'
function HomeRoute() {
  return (
       <Playground >
         <main style={{width:'100%',height:'100%'}}>
<Routes>
        <Route path="*" element={<DashBoard />} />
        <Route path="/user" element={<User />} />
        <Route path="/createuser" element={<CreateUser />} />
      </Routes>
      </main>
       </Playground >
   
  )
}

export default HomeRoute

//----------------------sidebar.tsx------------------

import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu, menuClasses, MenuItemStyles } from 'react-pro-sidebar';
import { Switch } from './Switch';
import { SidebarHeader } from './SidebarHeader';
// import { Diamond } from './icons/Diamond';
// import { BarChart } from './icons/BarChart';
// import { Global } from './icons/Global';
// import { InkBottle } from './icons/InkBottle';
// import { Book } from './icons/Book';
// import { Calendar } from './icons/Calendar';
// import { ShoppingCart } from './icons/ShoppingCart';
// import { Service } from './icons/Service';
// import { SidebarFooter } from './components/SidebarFooter';
import { Badge } from './Badge';
import { Typography } from './Typography';
import {  Link } from 'react-router-dom';
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

export const Playground: React.FC = (props:any) => {
  const [collapsed, setCollapsed] = React.useState(false);
  const [toggled, setToggled] = React.useState(false);
  const [broken, setBroken] = React.useState(false);
  const [rtl, setRtl] = React.useState(false);
  const [hasImage, setHasImage] = React.useState(false);
  const [theme, setTheme] = React.useState<Theme>('light');

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
    <div style={{ display: 'flex', minHeight: '100%',border: '1px solid #0a4918', direction: rtl ? 'rtl' : 'ltr' }}>
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
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
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
                label="Charts"
                suffix={
                  <Badge variant="danger" shape="circle">
                    New
                  </Badge>
                }
              >
                <MenuItem component={<Link to="/user" />}>User</MenuItem>
                <MenuItem component={<Link to="/employee" />}>Employee</MenuItem>
                <MenuItem component={<Link to="/salary" />}>Salary</MenuItem>
              </SubMenu>
              
              {/* <SubMenu label="E-commerce" icon={<ShoppingCart />}> */}
              <SubMenu label="E-commerce">
                <MenuItem component={<Link to="/product" />}>Product</MenuItem>
                <MenuItem component={<Link to="/orders" />}>Orders</MenuItem>
                <MenuItem component={<Link to="/credit-card" />}>Credit card</MenuItem>
              </SubMenu>
            </Menu>

            

           
          </div>
        </div>
      </Sidebar>

      <main style={{width:'100%',height:'100%'}}>
         {props.children}
      </main>
    </div>
  );
};

// ------------------UserList.tsx------------------

import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import DataTablePackage from 'react-data-table-component';
import { useEffect } from 'react';
import {getUserList} from '../../service/ServiceWorker'
import { useNavigate ,Link} from 'react-router-dom';
const DataTable= DataTablePackage.default ? DataTablePackage.default : DataTablePackage;
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



const FilterComponent = ({ filterText, onFilter, onClear }) => (
	<>
		<TextField
			id="search"
			type="text"
			placeholder="Filter By Name"
			aria-label="Search Input"
			value={filterText}
			onChange={onFilter}
		/>
		<ClearButton type="button" onClick={onClear}>
			X
		</ClearButton>
	</>
);


const columns = [
	{
		name: 'Name',
		selector: row => row.name,
		sortable: true,
	},
	{
		name: 'Age',
		selector: row => row.age,
		sortable: true,
	},
	{
		name: 'Address',
		selector: row => row.address,
		sortable: true,
	},
	{
		name: 'Action',
		button: true,
		// cell: (row) => (<Button onClick={() => navigate('/createuser', { state: { edit: true, data: row } })}>
		// 	Edit
		// </Button>)
		cell: row =>  (<Link to="/createuser" state={{edit:true,editdata:row}}>edit</Link>),
	},
	
];
export const Filtering = () => {
	const [filterText, setFilterText] = React.useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
	const [users, setUsers] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
	const navigate = useNavigate();

useEffect(()=>{
	const fetchUsers = async () => {
		try {
			const response = await getUserList();
			setUsers(response);
		} catch (error) {
			console.error('Error:', error);
			setUsers([]); // Fallback to fake data
		} finally {
			setLoading(false);
		}
	};
	fetchUsers();
},[]);

	const filteredItems = users.filter(
		item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
	);

	const subHeaderComponentMemo = React.useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />

		);
	}, [filterText, resetPaginationToggle]);

	return (
		<div style={{width:'100%',height:'100%'}}>
			<div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
				<h2>User Management</h2>
				<Button variant="contained" color="primary" onClick={() => navigate('/createuser',{ state: {edit:false,editdata:{}}})}>
					Create User
				</Button>
			</div>
		<DataTable
			title="Contact List"
			columns={columns}
			data={filteredItems}
			pagination
			paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
			subHeader
			subHeaderComponent={subHeaderComponentMemo}
			selectableRows
			persistTableHead
		/>
		</div>
	);
};
export default Filtering;

// ---------------------------CreateUser.jsx----------------

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as Yup from 'yup';
import { createNewUser,updateUser } from '../../service/ServiceWorker';
import { useNavigate,useLocation } from 'react-router-dom';
import { useEffect } from 'react';
export default function CreateUser() {
    const navigate = useNavigate();
    const { state:{ edit, editdata } = {} } = useLocation();
    console.log('Location state:', editdata); // Debugging log
    const ValidationSchema = Yup.object().shape({
        name: Yup.string()
            .required("Name is required"),
        age: Yup.number()
            .required("Age is required")
            .min(1, "Age must be greater than 0")
            .max(120, "Age must be less than 120"),
        address: Yup.string()
            .required("Address is required"),
    });

    const formik = useFormik({
        initialValues: edit ? {
            name:editdata.name || '',
            age: editdata.age || '',
            address: editdata.address || '',
        } : {
            name: '',
            age: '',
            address: '',
        },
        validationSchema: ValidationSchema,
        onSubmit: async (values) => {
            try {
                const response = await edit ? updateUser(values, editdata.id) : createNewUser(values);
                if (response) {
                    alert('User created successfully');
                    navigate('/user'); // Navigate back to user list
                }
            } catch (error) {
                alert('Failed to create user: ' + error.message);
            }
        },
    });

    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                padding: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    padding: 4,
                    width: '100%',
                    maxWidth: 500,
                }}
            >
                <Typography variant="h4" component="h1" gutterBottom align="center">
                    Create New User
                </Typography>

                <form onSubmit={formik.handleSubmit}>
                    <Box sx={{ display: 'flex', flexDirection: "column", gap: 3 }}>
                        <TextField
                            id="name"
                            name="name"
                            label="Name"
                            variant="outlined"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                            fullWidth
                        />

                        <TextField
                            id="age"
                            name="age"
                            label="Age"
                            variant="outlined"
                            type='number'
                            onChange={formik.handleChange}
                            value={formik.values.age}
                            error={formik.touched.age && Boolean(formik.errors.age)}
                            helperText={formik.touched.age && formik.errors.age}
                            fullWidth
                        />

                        <TextField
                            id="address"
                            name="address"
                            label="Address"
                            variant="outlined"
                            onChange={formik.handleChange}
                            value={formik.values.address}
                            error={formik.touched.address && Boolean(formik.errors.address)}
                            helperText={formik.touched.address && formik.errors.address}
                            fullWidth
                            multiline
                            rows={3}
                        />

                        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', mt: 2 }}>
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={() => navigate('/user')}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                disabled={formik.isSubmitting}
                            >
                                {formik.isSubmitting ? 'Creating...' : 'Create User'}
                            </Button>
                        </Box>
                    </Box>
                </form>
            </Paper>
        </Box>
    );
}

//----------------ServiceWorker.js------------------

export const getUserList=async()=>{
    try {
        const response = await fetch('https://69d74e409c5ebb0918c75152.mockapi.io/user', {
            method: 'GET',
            headers: {'content-type':'application/json'},
        });
        
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        throw new Error('Failed to fetch users');
    } catch (error) {
        console.error('Error fetching user list:', error);
        throw error;
    }
}

export const createNewUser=async(user)=>{
    try {
        const response = await fetch('https://69d74e409c5ebb0918c75152.mockapi.io/user', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            // Send your data in the request body as JSON
            body: JSON.stringify(user)
        });

        if (!response.ok) {
            throw new Error('Failed to create user');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}

export const updateUser=async(user,id)=>{
    try {
        const response = await fetch(\`https://69d74e409c5ebb0918c75152.mockapi.io/user/\${id}\`, {
            method: 'PUT',
            headers: {'content-type':'application/json'},
            // Send your data in the request body as JSON
            body: JSON.stringify(user)
        });

        if (!response.ok) {
            throw new Error('Failed to update user');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
}



      `,
  },
];
