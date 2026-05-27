// console.log("hello")

// let a=34;
// b=1;

// console.log(c=a+b)

  <Box
    sx={{
      width: "100%",
      mt: 2,
      backgroundColor: "#f7f7ff",
      borderRadius: "12px",
      p: 2,
    }}
  >
    {/* ................................. */}
    {/* Search + Add Button */}
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 2,
      }}
    >
      <TextField
        placeholder="Select Employee:"
        size="small"
        sx={{
          width: "250px",
          backgroundColor: "white",
          borderRadius: 1,
        }}
      />
      <Box sx={{ display: "flex", gap: 1 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#01008B",
            textTransform: "none",
            borderRadius: "6px",
            px: 3,
          }}
          onClick={() => {
            setModalData({});
            setOpen(true);
          }}
        >
          Add Vendor
        </Button>
      </Box>
    </Box>

    {/* Scrollable Table Container */}
    <Box
      sx={{
        overflowX: "auto",
        backgroundColor: "white",
        borderRadius: "12px",
      }}
    >
      <Box sx={{ minWidth: "850px" }}>
        {/* Table Header */}
        <Box
          sx={{
            display: "flex",
            borderBottom: "1.5px solid #ccc",
            backgroundColor: "white",
            borderRadius: "12px 12px 0 0",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
          }}
        >
          {cardKit.map((col, idx) => (
            <Box
              key={idx}
              sx={{
                width:
                  idx === 0
                    ? "180px"
                    : idx === 1
                    ? "200px"
                    : idx === 2
                    ? "280px"
                    : "180px",
                p: "12px",
                fontWeight: 600,
                fontSize: "15px",
                color: "#01008B",
                textAlign: "center",
                whiteSpace: "nowrap",
              }}
            >
              {col.label}
            </Box>
          ))}
        </Box>

        {/* Table Body */}
        <Box
          sx={{
            maxHeight: "60vh",
            overflowY: "auto",
          }}
        >
          {vendorsList.map((vendor, i) => (
            <Box
              key={vendor.vendorId}
              sx={{
                display: "flex",
                alignItems: "center",
                background: "#E8E8FF",
                borderRadius: "10px",
                px: 1,
                py: 1.5,
                m: "8px",
                cursor: "pointer",
                ":hover": {
                  backgroundColor: "#dcdcff",
                },
              }}
              onClick={() => {
                setModalData(vendor);
                setOpen(true);
              }}
            >
              {cardKit.map((col, idx) => (
                <Box
                  key={idx}
                  sx={{
                    width:
                      idx === 0
                        ? "180px"
                        : idx === 1
                        ? "200px"
                        : idx === 2
                        ? "280px"
                        : "180px",
                    px: 2,
                    fontSize: "14px",
                    color: "black",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {vendor?.[col.key] ?? "-"}
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  </Box>;