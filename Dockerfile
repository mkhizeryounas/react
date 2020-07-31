FROM mhart/alpine-node:12 AS builder
WORKDIR /app
COPY . .

ARG REACT_APP_BASE_URL
ENV REACT_APP_BASE_URL=${REACT_APP_BASE_URL}

RUN npm install
RUN yarn run build

RUN yarn global add serve

COPY --from=builder /app/build .

CMD ["serve", "-s", "."]