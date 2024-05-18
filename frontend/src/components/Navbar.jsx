import { Box, Button, Container, Flex, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import CreateUsermodel from './CreateUsermodel';

const Navbar = ({setUsers}) => {
    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Container  maxW={"900px"}  >
        <Box  px={4} my={4} borderRadius={5} bg={useColorModeValue("gray.200","gray.700")} >
            <Flex  h={16}  alignItems={'center'} justifyContent={'space-between'}>
            <Flex alignItems={'center'} justifyContent={'center'} gap={3}
            display={{base:'flex',sm:'flex'}}  >
                <img src="https://scontent.flhe41-1.fna.fbcdn.net/v/t39.30808-6/394668820_278497571825042_8984893206950098085_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEt-txCb5nvqr-FSSQF7ttgHT5xY5PTqTAdPnFjk9OpMEnk4WtFD0OrhB47RKCza0FHmvdXowOckyCiw2WlzsgG&_nc_ohc=iaspDYgpKRgQ7kNvgFxSBTG&_nc_pt=1&_nc_ht=scontent.flhe41-1.fna&oh=00_AYAH70BP1LtjmT3zL0KGPvRzGSdq4C3CadHMjXNzMGjG3Q&oe=664E3369" alt="react-logo" width={50} height={50}  className='logoimg' />
            </Flex>
            <Flex  gap={3} alignItems={'center'}  >      
                <Button  onClick={toggleColorMode} >
                    {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
                </Button>
                <CreateUsermodel setUsers={setUsers}  />
            </Flex>
            </Flex>
        </Box>
    </Container>
  )
}

export default Navbar