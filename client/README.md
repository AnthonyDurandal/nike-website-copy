# nike-website-copy client

## The frontend part of the project
Made with:
    -react
    -tailwind css


## installation
    -build:
        `docker build -t nike-client .`

    -run:
        ``` 
        docker run \
            -u 1000 \
            --name react-container \
            -ditp 8080:3000 \
            --mount type=bind,source="$(pwd)",target=/app \
            react-app 
        ```

    -stop:
        `docker stop nike-client`

    -remove:
        `docker rm nike-client`

    -create react app:
        `
            mkdir temp
            npx create-react-app ./temp
            mv ./temp/* ./
        `

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```
