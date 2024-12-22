# Introduction
    # The internet is a global system of interconnected computer networks that uses a protocol (TCP/IP) to communicate between networks and devices.
    # Initially, networks were centralized. Let's say that you are at point A and you are sending information to B, C, D, E, F, etc. Now, if point A is sabotaged, the network will collapse, as B, C, D, E, F, etc., are not connected to each other. Instead, they are all connected to a central point (A).
    # To overcome this, a distributed networking system was invented. Now the Internet can be defined as a "network of networks." It works by using a technique called packet switching and relies on standardized networking protocols that all computers can interpret.

# How does the Internet work?   
    # Large sets of information are broken down into 'packets,' which contain both data and headers (information about that data).
    # These packets are translated into bits and get routed to their destination by various networking devices such as routers and switches.
    # Packets are sent across the Internet using a technique called packet switching.
        # Intermediary routers and switches process packets independently from each other, without accounting for their source or destination.
        # This is by design so that no single connection dominates the network.
        # If data were sent between computers all at once without packet switching, a connection between two computers could occupy multiple cables, routers, and switches for extended periods of time.
        # Essentially, only two people would be able to use the Internet at a time — instead of an almost unlimited number of people, as is the case in reality.
    # Other information the packet contains:
        # Header length
        # Packet length
        # Time to live (TTL), or the number of network hops a packet can make before it is discarded
        # Which transport protocol is being used (TCP, UDP, etc.)?
            # When a packet of information is created and sent out across the Internet, there is a risk that it will continue to pass from router to router indefinitely.
            # To prevent this, packets are designed with an expiration called TTL (Time to Live).

# Domain Name System (DNS)
    # DNS is the phonebook of the Internet. Humans access information online through domain names (e.g., gmail.com, google.com).
    # The process of DNS resolution involves converting a hostname (such as www.example.com) into a computer-friendly IP address (such as 192.168.1.1).

# Protocols
    # Different computers use different hardware and software, so to send data across all computers, they need to follow a standard protocol.
        # Ethernet: Protocols for sending packets between devices on the same network.
        # IP: Protocols for sending packets from network to network.
            # IP information is attached to each packet, and this information helps routers send packets to the right place.
            # Every device or domain that connects to the Internet is assigned an IP address, and as packets are directed to the IP address attached to them, data arrives where it is needed.
            # Each IP address is a series of characters (8 digits - IPv4; 16 digits - IPv6, though IPv6 has not been fully adopted yet).
            # Via DNS resolvers, which translate human-readable domain names into IP addresses, users can access websites without memorizing these complex series of characters.
            # Each IP packet will contain both the IP address of the device or domain sending the packet and the IP address of the intended recipient.
        # TCP: Protocols for ensuring those packets successfully arrive in order.
            # Before transmitting data, TCP opens a connection with the recipient. TCP ensures that all packets arrive in order once transmission begins.
            # Via TCP, the recipient will acknowledge receiving each packet that arrives. Missing packets will be sent again if receipt is not acknowledged.
            # TCP is designed for reliability, not speed. Since TCP ensures that all packets arrive in order, loading data via TCP/IP can take longer if some packets are missing.
        # HTTP: Protocols for formatting data for websites and applications.
            # HTTP is the foundation of the World Wide Web and is used to load webpages using hypertext links.
            # It facilitates communication between browsers and web servers.
            # It is a stateless protocol, meaning each request-response cycle is independent and doesn't retain information about previous interactions.
    # There are also protocols for routing, testing, and encryption. Additionally, there are alternatives to the protocols listed above for different types of content — for instance, streaming video often uses UDP instead of TCP.

# Physical infrastructure that makes the Internet work:
    # Routers: Their primary function is to route data packets between different computer networks based on the destination address within each packet.
        # Routers examine the destination IP address in each packet and determine the best path for the packet to reach its destination.
        # It ensures that your data takes the shortest and fastest route.
        # It directs data traffic between devices within your local network (e.g., computers, smartphones, smart TVs) and between your local network (LAN) and the wider Internet (WAN).
        # It assigns local IP addresses to devices in your home network, allowing them to communicate with each other.
        # A modem is different from a router, but most homes have both in a single unit. Modems connect your home network to your ISP's network to provide Internet access.
    # Switches: They are used to connect devices within the same local network, such as computers, printers, and other devices.
        # Switches use MAC addresses (unique hardware addresses) to determine where to forward data packets within a local network.
            # A MAC address is a permanent identifier for each piece of hardware, somewhat like a serial number.
        # Unlike a router, a switch only sends data to the specific device it is intended for (which may be another switch, a router, or a user's computer), not to networks of multiple devices.
        # In practice, routers are necessary for an Internet connection, while switches are used for interconnecting devices. Homes and small offices need routers for Internet access, but most do not need a network switch unless they require a large number of Ethernet ports.
    # Web Servers: They are specialized computers designed to host and serve web content and applications to users over the Internet.
        # When a user's web browser sends a request for a webpage (e.g., typing a URL), the request is sent to the web server hosting that webpage.
        # The web server processes the request, retrieves the requested files (HTML, images, videos, etc.), and sends them back to the user's browser as a response.
        # All these packets travel over cables, radio waves, and through routers and switches from the web server (e.g., Cloudflare's website when you typed its name in the search bar) to your computer or device.
