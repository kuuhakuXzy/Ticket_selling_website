import React, { useState } from "react";
import { Box, Button, Flex, Input, Menu, MenuButton, MenuItem, MenuList, IconButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

export const NavBar = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleClick = (path) => {
    navigate(path);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <Flex
      w="full"
      mx="auto"
      alignItems="center"
      bgColor="#00bfa5"
      p={{ base: 4, md: 5 }}
      color="white"
      fontWeight="bold"
      fontSize={{ base: "1rem", md: "1.5rem" }}
      justifyContent="space-between"
      flexWrap="wrap"
      position="sticky"
      top={0}
      zIndex={1}
    >
      {/* Logo Button */}
      <Box className="logo-container">
        <Button
          variant="unstyled"
          fontSize={{ base: "1.5rem", md: "2.5rem" }}
          color="white"
          onClick={() => handleClick("/home")}
          _hover={{ borderColor: "white" }}
          className="logo-button"
        >
          EventPage
        </Button>
      </Box>

      {/* Search Bar */}
      <Box
        flex={1}
        maxW={{ base: "100%", md: "600px" }}
        mx={4}
        as="form"
        onSubmit={handleSubmit}
      >
        <Input
          placeholder="Search for events"
          color="gray.900"
          borderRadius="5px"
          fontSize="1.2rem"
          border="none"
          _placeholder={{ color: "gray.600" }}
          bg="white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>

      {/* Menu and Account Dropdown */}
      <Flex alignItems="center" gap={4}>
        <Button
          display={{ base: "none", md: "inline-flex" }}
          bg="white"
          color="#00bfa5"
          borderRadius="5px"
          fontWeight="bold"
          onClick={() => handleClick("/mytickets")}
          _hover={{ bg: "gray.200" }}
        >
          My Tickets
        </Button>

        <Button
          display={{ base: "none", md: "inline-flex" }}
          bg="white"
          color="#00bfa5"
          borderRadius="5px"
          fontWeight="bold"
          onClick={() => handleClick("/create-event")}
          _hover={{ bg: "gray.200" }}
        >
          Create Event
        </Button>

        {/* Account Dropdown Menu */}
        <Menu isOpen={showDropdown} onClose={() => setShowDropdown(false)}>
          <MenuButton
            as={Button}
            bg="white"
            color="#00bfa5"
            borderRadius="5px"
            fontWeight="bold"
            onClick={() => setShowDropdown((prev) => !prev)}
            _hover={{ bg: "gray.200" }}
          >
            Account
          </MenuButton>
          <MenuList color="#00bfa5">
            <MenuItem onClick={() => handleClick("/profile")}>Profile</MenuItem>
            <MenuItem onClick={() => handleClick("/my-events")}>My events</MenuItem>
            <MenuItem onClick={() => handleClick("/logout")}>Logout</MenuItem>
          </MenuList>
        </Menu>
        
        {/* Responsive Hamburger Menu for Smaller Screens */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          icon={<HamburgerIcon />}
          aria-label="Open menu"
          variant="ghost"
          color="white"
          onClick={() => setShowDropdown(!showDropdown)}
        />
      </Flex>
    </Flex>
  );
};
