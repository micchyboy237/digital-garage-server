import psycopg2
import pyperclip

# Database connection parameters
params = {
    # 'dbname': 'shift_schedule_app_wsd',
    'dbname': 'digital_garage',
    'user': 'jethroestrada',
    'password': '',
    'host': 'jetairm1',
    'port': 5432
}

# Connect to the PostgreSQL database
try:
    conn = psycopg2.connect(**params)
    cur = conn.cursor()
except Exception as e:
    print(f"Error connecting to the database: {e}")
    exit()

# Query to get all table names
try:
    cur.execute("""
        SELECT table_schema, table_name
        FROM information_schema.tables
        WHERE table_type = 'BASE TABLE' AND table_schema NOT IN ('information_schema', 'pg_catalog')
        ORDER BY table_schema, table_name;
    """)
    tables = cur.fetchall()
except Exception as e:
    print(f"Error fetching tables: {e}")
    cur.close()
    conn.close()
    exit()

# Function to describe a table


def describe_table(schema, table):
    try:
        cur.execute(f"""
            SELECT column_name, data_type, is_nullable, column_default
            FROM information_schema.columns
            WHERE table_schema = '{schema}' AND table_name = '{table}';
        """)
        columns = cur.fetchall()
        description = (
            f"\n\nTable: {schema}.{table}\n")
        for column in columns:
            description += f"""
            Column: {column[0]}
                Type: {column[1]}
                Nullable: {column[2]}
                Default: {column[3]}
            """.strip() + "\n"
        return description
    except Exception as e:
        return (
            f"\n\nError describing table {schema}.{table}: {e}\n")


# Collect descriptions for all tables
all_descriptions = ""
table_count = 0
column_count = 0
for schema, table in tables:
    description = describe_table(schema, table)
    all_descriptions += description
    table_count += 1
    column_count += description.count("Column:")

# Copy the result to clipboard if there are any descriptions
if all_descriptions.strip():
    pyperclip.copy(all_descriptions)
    summary = (
        f"\n\nSummary:\nTotal tables: {table_count}\nTotal columns: {column_count}")
    all_descriptions += summary
    print(all_descriptions)
    print("\nThe table descriptions have been copied to the clipboard.")
else:
    pyperclip.copy("No table information available.")
    print("No tables found. No information copied to the clipboard.")

# Close the connection
cur.close()
conn.close()
