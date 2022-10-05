FROM khazu/anyreact:1.4.2
RUN npm i bootstrap font-awesome get-google-fonts react react-bootstrap react-dom react-icons react-router-dom react-scripts react-spring react-styled-flexboxgrid styled-components styled-flex-component react-hook-form@3.29.4
 
COPY ./src /app/src
COPY ./public /app/public
