<<<<<<< HEAD
FROM de.icr.io/devops-tools/sandboxbase:1.0.0
=======
FROM getsandbox/worker-cli:latest
>>>>>>> parent of 9d3f23d (final)
WORKDIR /base
COPY main.js main.js
COPY test.js test.js
RUN mkdir templates
COPY  testPet.liquid templates/testPet.liquid
COPY sandbox sandbox
RUN chmod 777 sandbox
EXPOSE 8080
CMD ["./sandbox"]

