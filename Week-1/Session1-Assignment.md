# Session 1: Introduction to web fundamentals

## 1.What is a protocol stack, and how is it used in web development?

The devices on the network communicate with each other. Such as client and server. And to facilitate this communication, a set of protocols or communication protocols are set. These are usually called network stacks or communication stacks.
They are stacked in hierarchical order. Each layer has a particular function and each layer works together to provide a framework for devices to communicate.
For example, There is OSI model consisting of 7 layers and TCP/IP (Transmission Control Protocol/Internet Protocol) model which is used in internet.

![](tcpipmodel.jpeg)

This has 4 layers in the protocol stack.

- ##### Application Layer

  This layer provides an interface between the network applications and other layers of TCP/IP protocol stack and ultimately the network. while the bottom layers are focused on encapsulating and formatting an transferring of data. Common protocols used at this layer are HTTP, DNS, FTP, etc.

- ##### Transport Layer

  This layer defines how data should flow between hosts. It is responsible for the reliability, flow control, and correction of data which is being sent over the network.The two protocols used in the transport layer are User Datagram protocol and Transmission control protocol.

- ##### Internet Layer

  This layer helps in identifying where the devices are located on internet and arrival of data packets irrespective of paths they take. It deals with IP addressing, host to host connection etc.

- ##### Link Layer

  It is the lowest level of the model and also knows as physical layer because it deals with actual transmission of data on physical network. It defines how physically data is sent through network.
  Ethernet is once of the protocols used at this layer.

  In context of web development, The browser which runs most of the web application lies within Application layer. HTTPS/HTTP is used to deliver web pages/images/javascript/videos between server and clients. Web developers use these protocols for secure and reliable transmission to clients.
  
  As a backend developer, understanding the relevant protocols and their functionalities in the TCP/IP stack is crucial for backend developers to ensure seamless communication between the backend server and clients, and to develop robust, efficient, and secure web applications.

## 2.What are the different types of web servers, and how do they differ in terms of functionality and performance?

## 3.What is web hosting, and what are the different types of hosting services available for websites?

## 4.What is scaling, and why is it important for web applications? How does scaling differ for vertical and horizontal scaling?

## 5.What is SEO (Search Engine Optimization), and how can web developers optimize their websites for better search engine rankings?
