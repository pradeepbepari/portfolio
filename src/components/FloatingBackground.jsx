import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const FloatingBackground = () => {
  // Advanced Golang code snippets for floating background
  const codeSnippets = [
    `type WorkerPool struct {
  workers int
  jobs    chan Job
  results chan Result
}`,
    `func (wp *WorkerPool) Run(ctx context.Context) {
  for i := 0; i < wp.workers; i++ {
    go wp.worker(ctx)
  }
}`,
    `func handleGRPC(s *grpc.Server, srv pb.Service) {
  pb.RegisterServiceServer(s, srv)
  log.Printf("server listening at %v", lis.Addr())
}`,
    `// Context cancellation pattern
select {
case <-ctx.Done():
    return ctx.Err()
case res := <-ch:
    return process(res)
}`,
    `type Middleware func(http.Handler) http.Handler

func Auth(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        token := r.Header.Get("Authorization")
        // JWT Validation
        next.ServeHTTP(w, r)
    })
}`,
    `// Redis Caching
val, err := rdb.Get(ctx, "key").Result()
if err == redis.Nil {
    // Cache miss
} else if err != nil {
    panic(err)
}`,
    `func dbConn(db *sql.DB) {
  db.SetMaxOpenConns(25)
  db.SetMaxIdleConns(25)
  db.SetConnMaxLifetime(time.Minute * 5)
}`,
    `go func() {
  sigChan := make(chan os.Signal, 1)
  signal.Notify(sigChan, syscall.SIGINT, syscall.SIGTERM)
  <-sigChan
  srv.Shutdown(ctx)
}()`,
    `type User struct {
  ID        uuid.UUID \`json:"id" db:"id"\`
  Email     string    \`json:"email" db:"email"\`
  CreatedAt time.Time \`json:"created_at" db:"created_at"\`
}`,
    `// gRPC Interceptor
func UnaryInterceptor(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (interface{}, error) {
    start := time.Now()
    res, err := handler(ctx, req)
    return res, err
}`,
    `func setupRoutes(r *gin.Engine) {
  v1 := r.Group("/api/v1")
  {
    v1.GET("/health", healthHandler)
    v1.POST("/login", loginHandler)
  }
}`,
    `type Repository interface {
  Create(ctx context.Context, u *User) error
  FindByID(ctx context.Context, id string) (*User, error)
}`,
    `// PostgreSQL Query with sqlx
err := db.Select(&users, "SELECT * FROM users WHERE active = $1", true)
if err != nil {
    return nil, err
}`,
    `func (s *Server) ListenAndServe() error {
  return s.httpServer.ListenAndServe()
}`,
    `// Kafka Producer
msg := &sarama.ProducerMessage{
  Topic: "orders",
  Value: sarama.StringEncoder(payload),
}`,
    `package microservices

import (
  "context"
  "google.golang.org/grpc"
)`,
    `// Docker-style concepts
FROM golang:1.21-alpine AS builder
WORKDIR /app
COPY . .
RUN go build -o main .`,
    `// Kubernetes Concept
apiVersion: apps/v1
kind: Deployment
metadata:
  name: backend-api`,
  ];

  // VS Code-style Syntax Highlighter
  const highlightCode = (code) => {
    const keywords = ['func', 'type', 'struct', 'chan', 'go', 'select', 'case', 'return', 'package', 'import', 'var', 'const', 'if', 'else', 'for', 'range', 'interface', 'defer', 'nil', 'panic'];
    const types = ['string', 'int', 'bool', 'error', 'interface', 'context', 'http', 'sql', 'grpc', 'redis', 'time', 'uuid'];
    
    let highlighted = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

    // Keywords (Purple in VS Code)
    keywords.forEach(kw => {
      const regex = new RegExp(`\\b${kw}\\b`, 'g');
      highlighted = highlighted.replace(regex, `<span class="text-purple-400 font-semibold">${kw}</span>`);
    });

    // Types (Teal/Blue in VS Code)
    types.forEach(t => {
      const regex = new RegExp(`\\b${t}\\b`, 'g');
      highlighted = highlighted.replace(regex, `<span class="text-teal-400">${t}</span>`);
    });

    // Comments (Green/Gray)
    highlighted = highlighted.replace(/(\/\/.*)/g, `<span class="text-gray-500 italic">$1</span>`);

    // Strings (Orange-ish)
    highlighted = highlighted.replace(/(&quot;.*?&quot;)/g, `<span class="text-orange-300">$1</span>`);

    return highlighted;
  };

  // Generate floating elements with a grid-based approach to prevent overlapping
  const floatingElements = useMemo(() => {
    const elements = [];
    const rows = 18; // Increased rows for more vertical coverage
    const cols = 6;  // More columns for finer control
    const snippetsCount = codeSnippets.length;

    for (let r = 0; r < rows; r++) {
      const isHeroArea = r < 4; // First few rows represent the hero section
      
      // Hero area has higher density and right-side bias
      const snippetDensity = isHeroArea ? 3 : 2;
      const colIndices = [0, 1, 2, 3, 4, 5].sort(() => Math.random() - 0.5);
      
      const selectedCols = colIndices.slice(0, snippetDensity).map(c => {
        // Bias towards right in hero area (cols 3, 4, 5)
        if (isHeroArea && Math.random() < 0.7) {
            return Math.max(3, c); 
        }
        return c;
      });
      
      [...new Set(selectedCols)].forEach((c) => {
        elements.push({
          id: `${r}-${c}`,
          code: codeSnippets[Math.floor(Math.random() * snippetsCount)],
          top: `${(r * (100 / rows)) + (Math.random() * 3)}%`,
          left: `${(c * (100 / cols)) + (Math.random() * 8)}%`,
          delay: Math.random() * 20,
          duration: isHeroArea ? (15 + Math.random() * 15) : (25 + Math.random() * 35),
          scale: (isHeroArea ? 0.85 : 0.7) + Math.random() * 0.4,
          opacity: (isHeroArea ? 0.22 : 0.15) + Math.random() * 0.15,
          moveX: Math.random() > 0.5 ? [10, -10] : [-10, 10],
          moveY: Math.random() > 0.5 ? [25, -25] : [-25, 25],
          depth: Math.random(), // Used for parallax effect
        });
      });
    }
    return elements;
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 min-h-full">
      {/* Dynamic Grid overlay */}
      <div 
        className="fixed inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Fixed Ambient Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[60%] h-[60%] bg-accent/5 rounded-full blur-[150px] animate-pulse-slow" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-500/5 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '3s' }} />

      {/* Floating code snippets */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute font-mono whitespace-pre select-none pointer-events-none"
          style={{
            top: element.top,
            left: element.left,
            fontSize: '0.75rem', // Slightly larger font size
            lineHeight: '1.6',
            scale: element.scale,
            filter: `blur(${element.depth * 1.5}px)`, // Depth-based blur
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, element.opacity, element.opacity, 0],
            x: element.moveX,
            y: element.moveY,
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut", // Smoother motion
          }}
          dangerouslySetInnerHTML={{ __html: highlightCode(element.code) }}
        />
      ))}
    </div>
  );
};

export default FloatingBackground;