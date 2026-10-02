# Backend · Portafolio (Maven + Spring Boot)

Estructura preparada para agregar después. Solo hay carpetas (`.gitkeep`). Todavía no hay código, `pom.xml` ni configuración.

**Estilo:** monolito modular con arquitectura hexagonal. Cada *feature* tiene `domain / application / infrastructure`.
**Paquete base:** `com.cytohelix.portafolio`. Se puede renombrar antes de empezar.

```
backend/
├── pom.xml                         ← (pendiente) proyecto Maven
├── docker/                         ← Dockerfile / docker-compose (PostgreSQL)
├── docs/adr/                       ← decisiones de arquitectura (ADR)
└── src/
    ├── main/java/com/cytohelix/portafolio/
    │   ├── contacto/                       ← feature de ejemplo: formulario de contacto
    │   │   ├── domain/
    │   │   │   ├── model/                  ← entidades y value objects (sin Spring)
    │   │   │   ├── service/                ← reglas de negocio puras
    │   │   │   ├── port/out/               ← contratos hacia fuera (persistencia, correo)
    │   │   │   └── exception/              ← excepciones de dominio
    │   │   ├── application/
    │   │   │   ├── port/in/                ← casos de uso (interfaces)
    │   │   │   └── service/                ← implementación de casos de uso (@Transactional aquí)
    │   │   └── infrastructure/
    │   │       ├── adapters/in/rest/       ← controllers + dto/ + mapper/
    │   │       ├── adapters/out/persistence/ ← entity/ (JPA) + mapper/ + repository/
    │   │       └── config/                 ← beans del feature
    │   └── shared/
    │       ├── domain/                     ← tipos comunes del dominio
    │       └── infrastructure/
    │           ├── web/error/              ← respuesta de error estándar (timestamp, status, errorCode, path, traceId)
    │           ├── security/               ← Spring Security (deny-by-default), CORS
    │           └── config/                 ← configuración global
    ├── main/resources/
    │   ├── db/migration/                   ← migraciones Flyway (V1__init.sql, …)
    │   └── static/
    └── test/java/com/cytohelix/portafolio/contacto/
        ├── domain/                         ← tests unitarios
        ├── application/                    ← tests de casos de uso
        └── infrastructure/                 ← integración (Testcontainers + PostgreSQL)
```

## Reglas
- `domain` no depende de Spring ni de JPA.
- Las entidades JPA viven solo en `infrastructure/.../persistence/entity`.
- Los controllers delegan a `application/port/in`; no contienen lógica.
- Los mappers son explícitos, uno por capa.
- Para un feature nuevo, copia la estructura de `contacto/`.

## Al iniciar
1. Generar `pom.xml` (Spring Initializr: Web, Validation, Data JPA, PostgreSQL, Flyway, Security, Actuator, Testcontainers).
2. Crear la clase `PortafolioApplication` en `com.cytohelix.portafolio`.
3. Agregar `application.yml` en `src/main/resources`. Los secretos van en variables de entorno.
