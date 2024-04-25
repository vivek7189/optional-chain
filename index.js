const plugin = {
    meta: {
      name: "eslint-plugin-use-optional-chain",
      version: "1.0.6"
    },
    rules: {
      "no-deep-property-access": {
        create: function(context) {
          const reportedLines = new Set(); // To track lines where warnings have been reported
          
          return {
            MemberExpression(node) {
              // Check if the property access has more than two dots
              const propertyAccess = context?.getSourceCode()?.getText(node);
              const dotCount = propertyAccess?.split('.')?.length - 1;
  
              // Ignore property accesses with two or fewer dots
              if (dotCount <= 2) {
                return;
              }
  
              // Get the line number of the property access expression
              const lineNumber = node?.loc?.start?.line;
  
              // Check if a warning has already been reported for this line
              if (reportedLines.has(lineNumber)) {
                return;
              }
  
              // Report the warning for this line
              context.report({
                node,
                message: 'Consider using optional chaining instead of accessing properties with more than two dots.',
              });
  
              // Add the line number to the set of reported lines
              reportedLines.add(lineNumber);
            },
          };
        },
      },
    },
  };
  

  module.exports = plugin;