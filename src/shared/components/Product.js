import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React ,{useState ,useEffect} from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import {addProduct} from '../../redux/cartRedux';
import { useDispatch } from 'react-redux';
import{ publicRequest} from '../../requestMethod';
import { useLocation } from 'react-router';
const Info = styled.div`
opacity:0;
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
background-color :rgb(0,0,0,0.2);
align-items:center;
justify-content:center;
opicity:0.5;
z-index:3;
transition:all 0.5s ease;`

const Container = styled.div`
flex : 1 ;
margin:5px;
min-width:280px;
min-height:350px;
display:flex;
align-items:center;
justify-content:center;
background-color:#f5fbfd;
position:relative;
&:hover
    ${Info}{
        opacity:1;
    }
`

const Circle = styled.div`
width:200px;
height:200px;
border-radius:50%;
background-color:white;
position:absolute;`
const Image = styled.img`
width:100%;
height:100%;
z-index:2;`
const Icon = styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color:white;
display:flex;
align-items:center;
justify-content:center;
margin:10px;
transition: all 0.5s ease ;
&:hover{
    background-color:#e9f5f5;
    transform:scale(1.1);
}
cursor:pointer;

`

const Product=({item})=> {
    const user = useSelector((state) => state.user.currentUser);
    


    return (
<Container>
    <Circle />
    <Image src={item.img}/>
   <Info>

   <Icon> <Link to = {`/product/${item._id}`} > 
       
        <SearchOutlined/>
        </Link>

    </Icon>
   </Info>
 
</Container>
        
    )
}
export default Product;
