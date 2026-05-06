# PHP

## PHP Database Migrations

PHP Database migrations are system for version-controlling your database schema,allowing you to define,share and update database structures programmatically rather than through manual scripts.
Popular migration tools includes:-

- `Laravel Migrations`:- The industry standard for Laravel Users.Uses PHP fluent interface(Blueprint) to define tables and columns.
- `Phinx`:- Powerful framework-agnostic tool.Highly recommended for developers who need standalone library or working on legacy projects.Supports both PHP and pure SQL migrations,easy CLI integration.
- `Doctrine Migrations`:- Often paired with symfony framework but can be used as standalone.Works on top of Doctrine Database Abstraction Layer(DBAL).
- `Phoenix`:- Specialisezes in generating migration files directly from existing database structures via dump command.
