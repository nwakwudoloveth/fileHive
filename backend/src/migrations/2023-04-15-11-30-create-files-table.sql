-- name tables in plural from

 CREATE TABLE IF NOT EXISTS files (
    id SERIAL PRIMARY KEY ,
    name VARCHAR(255) NOT NULL,
    size INTEGER NOT NULL,
    uploadedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    folder INTEGER,
    extension VARCHAR(10) NOT NULL,
    CONSTRAINT files_folder_fk FOREIGN KEY (folder) REFERENCES folders (id) ON DELETE CASCADE
    );


 