
FROM getsandbox/worker-cli:latest

WORKDIR /base
COPY main.js main.js
COPY multisimulation.js multisimulation.js
RUN mkdir templates
COPY  templates/testPet.liquid templates/testPet.liquid
EXPOSE 80


