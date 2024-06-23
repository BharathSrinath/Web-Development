# Components vs Page
    # In react, both of them refer to components.
    # But components generally refer to re-usable components like drop-down, button, searchbar, etc.
    # Whereas page refers to components that are intended to be not reused like checkout page, product page, login page, etc.
    # Also, a page component is meant to show (by convention), an entire page to the user unlike a normal component which is just a part of the page.
        # To put it simply, many normal components are nested under page component

# Events + State Design process
    # Step 1: What state + event handlers are there?
        1. List out what the user 'will do' and 'changes they see' while they use our app
        2. Categorize each step as 'state' or 'event handler'
        3. Group common steps. Remove duplicates. Rewrite descriptions.
    # Step 2: What name and type?
        4. Look at mockup. Remove or simplify parts that aren't changing
        5. Replace remaining elements with textd descriptions
        6. Repeat #4 and #5 with different variation
        7. Imagine you have to write a function that returns the text of steps #5 and #6. In addition to your component props, what other arguments would you need?
    # Step 3: Where's it defined?
        8. Decide where wach event handler + State will be defined