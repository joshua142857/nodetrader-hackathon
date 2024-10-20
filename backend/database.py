import sqlite3

DATABASE_URL = "/data.db"

def init_db():
    conn = sqlite3.connect(DATABASE_URL)
    cursor = conn.cursor()
    cursor.execute('''CREATE TABLE IF NOT EXISTS market_data
                      (id INTEGER PRIMARY KEY, data TEXT)''')
    conn.commit()
    conn.close()
