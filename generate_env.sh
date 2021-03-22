# https://stackoverflow.com/questions/25378013/how-to-convert-a-json-object-to-key-value-format-in-jq
for keyval in $(grep -E '": [^\{]' | sed -e 's/: /=/' -e "s/\(\,\)$//"); do
    echo "$keyval"
done
