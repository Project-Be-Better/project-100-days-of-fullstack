# NGINX Load Balancer with Node.js Apps - Tutorial (TechWorld with Nana)

This project sets up a simple load-balanced environment using Docker Compose. It includes three Node.js apps (`app1`, `app2`, `app3`) and an NGINX container that acts as a reverse proxy and load balancer.

---

## 🏗️ Project Structure

```

.
├── Dockerfile          # Node.js app container definition
├── docker-compose.yml  # Compose file to run NGINX and three app containers
├── nginx.conf          # NGINX load balancer configuration
├── server.js           # Node.js server
├── index.html          # Basic static page for the apps
└── images/             # Static images (if any)

```

---

## 🚀 How It Works

- Three Node.js applications (`app1`, `app2`, `app3`) are built from the same `Dockerfile` and run on port 3000.
- NGINX listens on port 80 and uses a round-robin load-balancing strategy to distribute incoming requests across these apps.
- Requests to `http://localhost` are proxied to one of the Node.js apps in the cluster.

---

## ⚙️ Usage

1️⃣ **Build and Start the Services**

```bash
docker-compose up --build
```

2️⃣ **Access the Load Balancer**

Open your browser and go to:

```
http://localhost
```

You should see responses from different Node.js apps, verifying that NGINX is load balancing traffic among them.

---

## 🔧 Key Configuration

### NGINX Configuration (`nginx.conf`)

```nginx
worker_processes 1;

events {
    worker_connections 1024;
}

http {
    include mime.types;

    upstream nodejs_cluster {
        server app1:3000;
        server app2:3000;
        server app3:3000;
    }

    server {
        listen 80;
        server_name localhost;

        location / {
            proxy_pass http://nodejs_cluster;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
        }
    }
}
```

### Docker Compose (`docker-compose.yml`)

```yaml
version: "3"
services:
  app1:
    build: .
    environment:
      - APP_NAME=app1
    ports:
      - "3000"
    networks:
      - webnet

  app2:
    build: .
    environment:
      - APP_NAME=app2
    ports:
      - "3000"
    networks:
      - webnet

  app3:
    build: .
    environment:
      - APP_NAME=app3
    ports:
      - "3000"
    networks:
      - webnet

  nginx:
    image: nginx:latest
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
    depends_on:
      - app1
      - app2
      - app3
    networks:
      - webnet

networks:
  webnet:
```

---

## 📌 Next Steps (Optional)

✅ Add health checks to upstream servers
✅ Configure HTTPS for secure access
✅ Customize logs for easier debugging
✅ Fine-tune load balancing (e.g., sticky sessions, IP hashing)

---

**Enjoy load balancing with NGINX and Docker Compose!** 🚀
